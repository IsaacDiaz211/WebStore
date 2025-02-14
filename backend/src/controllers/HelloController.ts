import {Get, Query, Route, Tags} from "tsoa";
import {BasicResponse} from "../controllers/types/index";
import {IHelloController} from "../controllers/interfaces";
import {LogSuccess} from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
    /**
     * Endpoint to retrieve a Message "Hello {name}" in JSON
     * @param {string | undefined } name Name of user to be greeted
     * @returns { BasicResponse } Promise of BasicResponse
     */
    @Get("/")
    public async getMessage(@Query()name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] get Request');
        return {
            message: `Hello ${name || 'world'}`,
        }
    }
}