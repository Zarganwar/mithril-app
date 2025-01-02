import Container from "./di/Container";
import UserRepository from "../infrastructure/UserRepository";
import initializeRouter from "./router/router";

export default class Bootstrap {

    boot(element: HTMLElement): Container {
        const container = this.initializeContainer();
        this.initializeRouter(element, container);

        return container;
    }

    private initializeContainer(): Container {
        const container = new Container();

        container.addService(UserRepository.name, () => new UserRepository());

        return container;
    }

    private initializeRouter(root: HTMLElement, container: Container): void {
        initializeRouter(root, container);
    }
}