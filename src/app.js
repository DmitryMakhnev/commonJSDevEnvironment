var React = require('react');

var app = {};

app.components = {
    LikeButton: require('./components/LikeButton')
};


app.init = function () {
    var LikeButton = app.components.LikeButton;

    var likeButtonInstance = React.render(
        <LikeButton />,
        document.body
    );
};

module.exports = app;
