import {Component} from '@angular/core';

import {Facebook, FacebookLoginResponse} from '@awesome-cordova-plugins/facebook/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private fb: Facebook) {
    }


    testLogin() {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then((res: FacebookLoginResponse) => {
                console.log('Logged into Facebook!', JSON.stringify(res));
                alert('Login OK');
            })
            .catch(e => {
                console.log('Error logging into Facebook', e);
                alert('Login ERROR');
            });
    }

    testShare() {
        const options = {
            method: 'share',
            href: 'https://pixael.com',
            share_feedWeb: true,
        };

        this.fb.showDialog(options).then((result) => {
            console.log('Shared with Facebook', JSON.stringify(result));
            alert('Shared OK');
        }).catch((e) => {
            console.log(e);
            alert('Share ERROR');
        });
    }

    testGameRequest() {
        const options = {
            method: "apprequests",
            message: "Come on man, check out my application.",
            data: 'data',
            title: 'title',
            actionType: 'askfor',
            objectID: 'YOUR_OBJECT_ID',
            filters: 'app_non_users'
        };

        this.fb.showDialog(options).then((result) => {
            console.log('GameRequest', JSON.stringify(result));
            alert('GameRequest OK');
        }).catch((e) => {
            console.log(e);
            alert('GameRequest ERROR');
        });
    }

}
