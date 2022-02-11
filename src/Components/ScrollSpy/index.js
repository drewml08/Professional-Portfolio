import React from "react";

const CHECK_Y_DELTA = 20;
const UPDATE_INTERVAL = 30;

function getNavItem( elem ) {
    if( elem.props && elem.props.href ) {
        return elem;  
    }

    var ref = null;
    React.Children.forEach( elem.props.children, function(e)
    {
        if( ref ) return;

        ref = getNavItem( e );
    });

    return ref;
}


class ScrollSpy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            lastYCheck: window.scrollY + (CHECK_Y_DELTA * 2),
        };

        this.state.items = this.props.children.map(function (el) {
            var item = getNavItem( el );
            if( !item ) return;

            if( item.props && item.props.href )
            {
                return {
                    inView: false,
                    element: null,
                    navBtn: item
                };
            }
            return;
        });
    }

    static defaultProps = {
        offset: 2,
        activeClass: 'active',
        anchorOffset: 0,
        scrollSpeed: 5
    };

    isInView = (element) => {
        if (!element) {
            return false;
        }
        const { offset } = this.props;
        const rect = element.getBoundingClientRect();

        return rect.top >= 0 - offset && rect.bottom <= window.innerHeight + offset || 
        rect.top <= - offset && rect.bottom >= window.innerHeight + offset;
    };

    refreshInView() {
        const update = this.state.items.map( el => {
            el.inView = this.isInView( el.element );
            return el;
        });
        this.setState({ 
            lastYCheck: window.scrollY,
            items: update });

        const { activeClass } = this.props;

        // Go through each item, and set the first one we find to active, and
        // all others remove the active state
        var firstItem = false;
        this.state.items.forEach( item => {
            var domObj = item.navBtn && item.navBtn.ref ? item.navBtn.ref.current : null;

            if( !firstItem && item.inView ) {
                firstItem = true;
                if( domObj ) domObj.classList.add( activeClass );
            } else {
                if( domObj ) domObj.classList.remove( activeClass );
            }
        });
    }

    scrollTo(element) {
        this.targetElement = element;

        if( !element ) return;

        const rect = element.getBoundingClientRect();

        this.direction = rect.top > 0 ? 1 : -1;
    }


    doUpdate() {
        // We're not currently animating a scroll
        if( !this.targetElement ) return;

        const { scrollSpeed, anchorOffset } = this.props;
        const rect = this.targetElement.getBoundingClientRect();
        var step = this.direction * scrollSpeed;

        // Clip our step if we're close to the end of our range
        const newTop = rect.top - step;
        if( step < 0 ) {
            // We're heading up the page
            if( newTop > anchorOffset ) {
                step = step + (newTop - anchorOffset);
                this.targetElement = null;  // Animation is complete
            }
        } else {
            // We're moving down the page
            if( newTop < anchorOffset ) {
                step = rect.top - anchorOffset;
                this.targetElement = null;  // Animation is complete
            }
        }

        this.userScroll = false;
        const oldY = window.scrollY;
        window.scrollBy({
            left: 0,
            top: step,
            behavior: 'instant' });

        if( oldY === window.scrollY ) {
            this.targetElement = null;
        }
    }

    componentDidMount() {
        const update = this.state.items.map( el => {
            el.element = document.getElementById( el.navBtn.props.href.replace( '#', '' ) );
            return el;
        });
        this.setState({ 
            lastYCheck: this.state.lastYCheck,
            items: update });

        // Register our custom on click handler
        const self = this;
        this.state.items.forEach( item => {
            var domObj = item.navBtn && item.navBtn.ref ? item.navBtn.ref.current : null;
            if( domObj ) {
                domObj.addEventListener( 'click', ( e ) => {
                    self.scrollTo( item.element );
                    e.preventDefault();
                });
            }
        });

        // Register our scroll handler
        if( update.length )
        {
            var ScrollEvent = new Event('scroll');
            const self = this;
            window.addEventListener('scroll', (e) =>
            {
                // abort any scroll animation if the user has scrolled the page
                if( this.targetElement && this.userScroll ) {
                    this.targetElement = null;
                }

                this.userScroll = true;
                if( Math.abs( window.scrollY - self.state.lastYCheck ) > CHECK_Y_DELTA )
                {
                    self.refreshInView();
                }
            },
            { 
                passive: true
            });
            window.dispatchEvent(ScrollEvent);
        }

        this.timer = window.setInterval(() => this.doUpdate(), UPDATE_INTERVAL);
        this.userScroll = true;
    }

    componentWillUnmount() {
        window.clearInterval( this.timer );
    }

    render() {
        const {
            className
        } = this.props;

        return (
            <ul className={className}>
                {this.props.children}
            </ul>
        );
    }
}

export default ScrollSpy