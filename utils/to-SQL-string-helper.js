// ToSQLStringHelper.js

class ToSQLStringHelper {
    save(tableName, JSONobject) {
        var sql = "INSERT INTO " + tableName + " (";
        var body = JSONobject;
        Object.keys(body).forEach(key => {
            sql += key + ",";
        });
        sql = sql.substr(0, sql.length - 1);
        sql += ") VALUES (";
        Object.values(body).forEach(value => {
            if (typeof value === 'string')
                sql += "'" + value + "',";
            else
                sql += value + ",";
        });
        sql = sql.substr(0, sql.length - 1);
        sql += ")";
        return sql;
    }
}
module.exports = new ToSQLStringHelper();