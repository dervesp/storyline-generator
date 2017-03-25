import uuid from "uuid";
function generateId(type) {
    return type + "_" + uuid();
}

export function addActivity(lifeYearId) {
    const activityId =generateId("activity");
    return {
        type: "ADD_ACTIVITY",
        payload: {
            lifeYearId,
            activityId,
        }
    }
}

export function updateActivity(activityId, skillType, time) {
    return {
        type: "UPDATE_ACTIVITY",
        payload: {
            activityId,
            skillType,
            time,
        }
    }
}

export function addLifeYear() {
    const lifeYearId =generateId("lifeYear");
    return {
        type: "ADD_LIFE_YEAR",
        payload: {
            lifeYearId,
        }
    }
}