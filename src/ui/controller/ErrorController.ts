import m from "mithril";
import layout from "../components/layout/layout";
import {defaultLink} from "../../application/router/links";

type TError = {
    message: string;
    error?: Error | null;
    code?: number | null;
}

export default class ErrorController {

    private errorData: TError | null = null;

    oninit(vnode: m.Vnode & {attrs: TError}) {
        this.errorData = {
            message: vnode.attrs.message,
            error: vnode.attrs.error || null,
            code: vnode.attrs.code || null
        };
    }

    view() {
        const content = [
            m('h1', 'Error'),
            m('p', this.errorData?.message || 'Unknown error'),
        ];

        if (this.errorData?.error) {
            content.push(m('p', `Error: ${this.errorData.error.message}`));
        }

        if (this.errorData?.code) {
            content.push(m('p', `Code: ${this.errorData.code}`));
        }

        content.push(defaultLink('Back to home'));

        return layout(content);
    }

}