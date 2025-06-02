const { chatWithAI } = require(`./aiSystem`);

const handleChatRequest = async (req, res) => {
    try{    

        const { prompt } = req.body;

        if(!prompt){
            return res.status(400).json({
                success: false,
                error: `Prompt is required!`
            })
        }

        const result = await chatWithAI(prompt)
        console.log(result);
        
        if(result.success) {
            res.json({
                success: true,
                answer: result.answer
            })
        } else {
            res.status(500).json({
                success: false,
                error: "Our AI is currently out of work, please try in 5 minutes",
            })
        }

    }catch(err){
        res.status(500).json({
            success: false,
            error: `internal server error`,
        })
    }
}

module.exports = { handleChatRequest }