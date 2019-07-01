/**
 * @package WordPress
 * @subpackage Increase
 * @since Increase 1.0
 * 
 * Template Scripts
 * Created by CMSMasters
 * 
 */

/* --------------------------------------------- */
/* Author: http://codecanyon.net/user/CodingJack */
/* --------------------------------------------- */
var lsjQuery = jQuery;

lsjQuery(document).ready(function() {
                if(typeof lsjQuery.fn.layerSlider == "undefined") { lsShowNotice('layerslider_2','jquery'); }
                    else if(typeof lsjQuery.transit == "undefined" || typeof lsjQuery.transit.modifiedForLayerSlider == "undefined") { lsShowNotice('layerslider_2', 'transit'); }
                        else {
                            lsjQuery("#layerslider_2").layerSlider({
                                width : '1160px',
                                height : '480px',
                                responsive : true,
                                responsiveUnder : 0,
                                sublayerContainer : 0,
                                autoStart : true,
                                pauseOnHover : true,
                                firstLayer : 1,
                                animateFirstLayer : true,
                                randomSlideshow : false,
                                twoWaySlideshow : true,
                                loops : 0,
                                forceLoopNum : true,
                                autoPlayVideos : true,
                                autoPauseSlideshow : 'auto',
                                youtubePreview : 'maxresdefault.jpg',
                                keybNav : true,
                                touchNav : true,
                                skin : 'increase',
                                skinsPath : 'http://www.bluedrum.cn/plugins/LayerSlider/skins/',
globalBGColor : '#ffffff',
navPrevNext : true,
                                navStartStop : false,
                                navButtons : true,
                                hoverPrevNext : true,
                                hoverBottomNav : false,
                                thumbnailNavigation : 'hover',
                                tnWidth : 100,
                                tnHeight : 60,
                                tnContainerWidth : '60%',
                                tnActiveOpacity : 35,
                                tnInactiveOpacity : 100,
                                imgPreload : true,
                        		yourLogo : false,
                                yourLogoStyle : 'left: 10px; top: 10px;',
                                yourLogoLink : false,
                                yourLogoTarget : '_self',
                                cbInit : function(element) { },
                                cbStart : function(data) { },
                                cbStop : function(data) { },
                                cbPause : function(data) { },
                                cbAnimStart : function(data) { },
                                cbAnimStop : function(data) { },
                                cbPrev : function(data) { },
                                cbNext : function(data) { }
                            });
                        }
            });