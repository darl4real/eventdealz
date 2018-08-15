module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        title: DataTypes.STRING,
        owner: DataTypes.STRING,
        type: DataTypes.STRING,
        album: DataTypes.STRING,
        albumImageUrl: DataTypes.STRING,
        Descriptions: DataTypes.TEXT,
        tab: DataTypes.TEXT
    })

    Event.associate = function(models) {}

    return Event
}