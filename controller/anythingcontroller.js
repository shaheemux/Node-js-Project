const getMessage = (req, res)=>{
    res.send({
        message:'hiiiii'

    })
};

const postMessage = (req, res)=>{
    res.send({
        message:'this is a post'

    })
}

const deleteMessage =  (req, res)=>{
    res.send({
        message:'this is a delete'

    })
}

export {getMessage, postMessage, deleteMessage}
