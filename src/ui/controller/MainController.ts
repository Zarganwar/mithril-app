import m from "mithril";
import layout from "../components/layout/layout";
import {defaultLink, userListLink} from "../../application/router/links";

export default class MainController {
    view() {
        return layout([
            m('h1', 'This is the main controller'),
            m('ul', {}, [
                m('li', defaultLink('Go to default')),
                m('li', userListLink('Users')),
            ])
        ]);

    }
}