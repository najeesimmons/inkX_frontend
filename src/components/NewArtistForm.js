import { useState } from "react";

const NewArtistForm = (props) => {

    // state to hold formData
    const [newArtistForm, setNewArtistForm] = useState({
        first_name: "",
        last_name: "",
        profile_pic: "",
        city: "",
        state: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewArtistForm({ ...newArtistForm, [event.target.name]: event.target.value });
    };

     // handle submit function for form
     const handleSubmit = (event) => {
        event.preventDefault();
        props.createArtist(newArtistForm)
        setNewArtistForm({
            first_name: "",
            last_name: "",
            profile_pic: "",
            city: "",
            state: "",
        });
    };
  
    return (
        <section>
            <h1>Create Profile</h1>
            <form className ="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newArtistForm.first_name}
                    name="first_name"
                    placeholder="first_name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newArtistForm.last_name}
                    name="last_name"
                    placeholder="last_name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newArtistForm.profile_pic}
                    name="profile_pic"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newArtistForm.city}
                    name="city"
                    placeholder="city"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newArtistForm.state}
                    name="state"
                    placeholder="state"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Artist" />
            </form>
            {/* {props.artist ? loaded() : loading()} */}
        </section>
    );
}

export default NewArtistForm;