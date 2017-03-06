FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render('home', {content:'walletlist'});
    }
});
FlowRouter.route('/wallet/:walletAdderss', {
    action: function (params, queryParams) {
        console.log("Yeah! We are on the post:", params.walletAdderss);
        BlazeLayout.render('home', {content:'walletdetail'});
    }
});