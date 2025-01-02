import m from "mithril";
import UserRepository from "../../infrastructure/UserRepository";
import loader from "../components/loader/loader";
import layout from "../components/layout/layout";

export default class UserDetailController {
    private repository: UserRepository;
    private user: TUser | null = null;


    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    oninit(vnode: m.Vnode & { attrs: { userId: string } }) {
        const attrName = 'userId';
        const attr = vnode.attrs[attrName];

        this.repository
            .get(attr)
            .then(user => this.user = user)
            .then(() => m.redraw())
            .catch((e) => m.route.set('/error', {
                message: 'Failed to load user',
                error: e,
                code: 404
            }));
    }

    view() {
        const els = [
            m('h1', 'User detail'),
        ];

        if (this.user) {
            els.push( m('p', `User name: ${this.user.name}`));
            els.push(m('a', {href: '#!/users'}, 'Back to user list'));
        } else {
            els.push(loader())
        }

        return layout(els);
    }

}