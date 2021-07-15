const Form = () => {
    return (
        <div className="form">
            <form
                method="post"
                name="contact"
            // action="/thank-you" 
            // functioniert nicht mit React, aber mit next.js 
            >
                <input type="hidden" name="form-name" value="contact" />

                Name: <input type="text" name="name" />
                Email: <input type="email" name="email" />
                Message: <textarea name="message"></textarea>
                <button type="submit">Senden</button>
            </form>
        </div>
    );
}

export default Form;