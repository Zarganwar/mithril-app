import m from "mithril";
import DefaultController from "../../ui/controller/DefaultController";
import MainController from "../../ui/controller/MainController";
import UserListController from "../../ui/controller/UserListController";
import Container from "../di/Container";
import UserRepository from "../../infrastructure/UserRepository";
import UserDetailController from "../../ui/controller/UserDetailController";
import ErrorController from "../../ui/controller/ErrorController";

export default function initializeRouter(
    root: HTMLElement,
    container: Container
): void {
    registerControllersAsServices(container);

    const routeDefs: {[key: string]: TRouteDef} = {
        '/': {
            onmatch: () => container.get(DefaultController.name),
        },
        '/main': {
            onmatch: () => container.get(MainController.name),
        },
        '/users': {
            onmatch: () => container.get(UserListController.name),
        },
        '/user/:userId': {
            onmatch: () => container.get(UserDetailController.name),
        },
        '/error': {
            onmatch: () => container.get(ErrorController.name),
        },
    };

    m.route(root, '/', routeDefs);
    m.route.set('/', {}, {replace: true});
}

function registerControllersAsServices(container: Container): void {
    container.addService(DefaultController.name, () => new DefaultController());
    container.addService(MainController.name, () => new MainController());
    container.addService(UserListController.name, () => new UserListController(container.get(UserRepository.name)));
    container.addService(UserDetailController.name, () => new UserDetailController(container.get(UserRepository.name)));
    container.addService(ErrorController.name, () => new ErrorController());
}

type TRouteDef = {
    onmatch: () => void;
}