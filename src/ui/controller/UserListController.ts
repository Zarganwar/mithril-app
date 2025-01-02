import UserRepository from "../../infrastructure/UserRepository";
import m from "mithril";
import {defaultLink, userLink} from "../../application/router/links";
import layout from "../components/layout/layout";
import loader from "../components/loader/loader";

export default class UserListController {

    private userRepository: UserRepository;
    private users: TUser[] | null = null;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    oninit() {
        this.userRepository
            .findAll()
            .then(users => this.users = users)
            .then(() => m.redraw())
            .catch((e) => m.route.set('/error', {
                message: 'Failed to load users',
                error: e,
                code: 404
            }))
        ;
    }

    view() {
        const content = [m('h1', 'User list')];

        if (this.users !== null) {
            const list = m('ul', {}, this.users.map(u => m('li', {}, userLink(u, u.name))))

            content.push(list);
        } else {
            content.push(loader());
        }

        content.push(defaultLink('Back to home'));

        return layout(content);
    }

}