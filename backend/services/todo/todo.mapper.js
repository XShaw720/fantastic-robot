function fromCreateRequest(req){
    return {
        id: req.id,
        name: req.name,
        isComplete: req.isComplete
    };
};

function fromUpdateRequest(req){
    return {
        name: req.name,
        isComplete: req.isComplete
    };
};

function toDto(todoItem){
    return {
        id: todoItem.id,
        name: todoItem.name,
        isComplete: todoItem.isComplete
    };
};

export default {
    fromCreateRequest,
    fromUpdateRequest,
    toDto
};