import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {

    constructor(
        private userService: UserService,
        private storage: Storage,
        private router: Router
    ) {
    }

    async canActivate() {
        // const user = await this.storage.get('user');
        const user = {};
        if (!user) {
            this.router.navigate(['login']);
            return false;
        } else {
            return true;
        }
    }
}
