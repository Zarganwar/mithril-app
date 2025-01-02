export default class Container {
    private instances: Map<any, any> = new Map();
    private factories: Map<any, () => any> = new Map();

    addService<T>(key: any, factory: () => T) {
        this.factories.set(key, factory);
    }

    get<T>(key: any): T {

        console.log(`Getting instance for key: ${key}`);

        if (!this.instances.has(key)) {
            const factory = this.factories.get(key);

            if (!factory) {
                throw new Error(`No factory registered for key: ${key}`);
            }

            console.log(`Creating instance for key: ${key}`);
            this.instances.set(key, factory());
        }

        console.log(`Returning instance for key: ${key}`);

        return this.instances.get(key);
    }
}