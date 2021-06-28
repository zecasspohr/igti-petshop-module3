import Sequelize from "sequelize";

const sequelize = new Sequelize("postgres://tybubqqf:Fs2pddC_Fb1XzhAWZGiAT5Uti1AwypD-@batyr.db.elephantsql.com/tybubqqf",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    });

export default sequelize;