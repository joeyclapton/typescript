function setAPIVersion(version: string) {
    return (constructor: any) => {
        return class extends constructor {
            value = version;
        }
    }
}

@setAPIVersion('20.0.1')
class API { }

console.log(new API())