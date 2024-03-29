/*global Modernizr, jQuery */

// /**
//  * Reponsive and gracefully degrading header video
//    More info on http://zerosixthree.se/create-a-responsive-header-video-with-graceful-degradation/
//  * -----------------------------------------------------------------------------
//  */
'use strict';

var HeaderVideo = function(settings) {
    if (settings.element.length === 0) {
        return;
    }
    this.init(settings);
};

HeaderVideo.prototype.init = function(settings) {
    this.jQueryelement = jQuery(settings.element);
    this.settings = settings;
    this.videoDetails = this.getVideoDetails();

    jQuery(this.settings.closeTrigger).hide();
    this.setFluidContainer();
    this.bindUIActions();

    if(this.videoDetails.teaser && Modernizr.video && !Modernizr.touch) {
        this.appendTeaserVideo();
    }
};

HeaderVideo.prototype.bindUIActions = function() {
    var that = this;
    jQuery(this.settings.playTrigger).on('click', function(e) {
        e.preventDefault();
        that.appendIframe();
    });
    jQuery(this.settings.closeTrigger).on('click', function(e){
        e.preventDefault();
        that.removeIframe();
    });
};

HeaderVideo.prototype.appendIframe = function() {
    var html = '<iframe id="header-video__video-element" src="'+this.videoDetails.videoURL+'?rel=0&amp;hd=1&autohide=1&showinfo=0&autoplay=1&enablejsapi=1&origin=*" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    jQuery(this.settings.playTrigger).fadeOut();
    jQuery(this.settings.closeTrigger).fadeIn();
    this.jQueryelement.append(html);
};

HeaderVideo.prototype.removeIframe = function() {
    jQuery(this.settings.playTrigger).fadeIn();
    jQuery(this.settings.closeTrigger).fadeOut();
    this.jQueryelement.find('#header-video__video-element').remove();
};

HeaderVideo.prototype.appendTeaserVideo = function() {
    var source = this.videoDetails.teaser;
    var html = '<video autoplay="true" loop="true" muted id="header-video__teaser-video" class="header-video__teaser-video"><source src="http://iiit.addesigner.pl/wp-content/uploads/2016/10/teaser-video.webm" type="video/webm"><source src="http://iiit.addesigner.pl/wp-content/uploads/2016/10/teaser-video.mp4" type="video/mp4"></video>';
    this.jQueryelement.append(html);
};

HeaderVideo.prototype.setFluidContainer = function() {
    var element = this.jQueryelement;
    element.data('aspectRatio', this.videoDetails.videoHeight / this.videoDetails.videoWidth);

    jQuery(window).resize(function() {
        var windowWidth = jQuery(window).width();
        var windowHeight = jQuery(window).height();

        element.width(Math.ceil(windowWidth));
        element.height(Math.ceil(windowWidth * element.data('aspectRatio'))); //Set the videos aspect ratio, see https://css-tricks.com/fluid-width-youtube-videos/

        if(windowHeight < element.height()) {
            element.width(Math.ceil(windowWidth));
            element.height(Math.ceil(windowHeight));
        }
    }).trigger('resize');
};

HeaderVideo.prototype.getVideoDetails = function() {
    var mediaElement = jQuery(this.settings.media);

    return {
        videoURL: mediaElement.attr('data-video-URL'),
        teaser: mediaElement.attr('data-teaser'),
        videoHeight: mediaElement.attr('data-video-height'),
        videoWidth: mediaElement.attr('data-video-width')
    };
};
