import React from "react";

const FormApp = () => {
    return(
        <div>
            <form>
                <input list="cities" name="city"/>
                <datalist id="cities">
                    <option value="تهران"/>
                    <option value="سنندج"/>
                    <option value="اصفهان"/>
                    <option value="سیستان"/>
                    <option value="یاسوج"/>
                </datalist>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default FormApp