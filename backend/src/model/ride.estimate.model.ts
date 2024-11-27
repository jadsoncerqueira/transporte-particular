import { Pool, ResultSetHeader } from "mysql2";

class RideEstimateModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }
}