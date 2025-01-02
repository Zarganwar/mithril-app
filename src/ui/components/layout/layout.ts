import './layout.scss';
import m, {Vnode} from "mithril";

export default function layout(content: string | Vnode | Vnode[]): Vnode {
    return m('.container', {}, content);
}