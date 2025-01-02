import m, {Vnode} from "mithril";
import layout from "../components/layout/layout";
import loader from "../components/loader/loader";

export default class DefaultController {
    view(): Vnode | Vnode[] {
        window.setTimeout(() => m.route.set('/main'), 1000);

        return layout([
            loader(),
            m('a', {href: '#!/main'}, 'Skip loading'),
        ]);
    }
}