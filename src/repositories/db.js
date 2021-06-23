import pg from "pg";

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://tybubqqf:Fs2pddC_Fb1XzhAWZGiAT5Uti1AwypD-@batyr.db.elephantsql.com/tybubqqf"
    });
    global.connection = pool;

    return pool.connect();
}

export {
    connect,
}