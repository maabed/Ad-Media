Router.configure({
    layoutTemplate: 'Layout',
    loadingTemplate: 'Loading',
	  notFoundTemplate: 'notfound',
    yieldTemplates: {
        header: {
            to: 'header'
        },
        footer: {
            to: 'footer'
        }
    }
});

Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('book', {
        path: '/book'
    });
    this.route('signin', {
        path: '/signin'
    });
    this.route('doc', {
        path: '/doc'
    });
});

Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
    except: ['home', 'atSignIn', 'atSignUp', 'atForgotPassword']
});
