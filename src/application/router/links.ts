import m from "mithril";

export function defaultLink(content: string): m.Vnode {
    return m('a', {href: '#!/'}, content);
}

export function userListLink(content: string): m.Vnode {
    return m('a', {href: '#!/users'}, content);
}

export function userLink(user: TUser, content: string): m.Vnode {
    return m('a.user-link', {href: '#!/user/' + user.id}, content);
}