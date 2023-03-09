export class BorrowerAlreadyExistsException extends Error {
    /**
     *
     */
    constructor() {
        super("User with this RFC has already been regristred");
    }
}
