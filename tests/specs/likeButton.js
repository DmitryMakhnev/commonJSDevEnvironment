var React = require('react');
var app = require('app');
var LikeButton = app.components.LikeButton;

describe('components.likeButton', function () {
    var likeButton = React.render(
        <LikeButton />,
        document.body
    );

    it('correct start state', function () {
        expect(likeButton.state.liked).toBeFalsy();
    });

    it('correct state after click', function () {
        effroi.mouse.click(document.getElementsByClassName('toggled')[0]);
        expect(likeButton.state.liked).toBeTruthy();
    });

});