import { useState } from "react";
import {Link} from "react-router-dom"

function Artist(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            email: "",
            bio: "",
            profile_pic: "",
            city: "",
            state: "",
            phone: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createArtist(newForm);
        setNewForm({
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            email: "",
            bio: "",
            profile_pic: "",
            city: "",
            state: "",
            phone: "",
        });
    };

    // loaded function
    const loaded = () => {
        return props.artist.map((artist) => (
            <div key={artist._id} className="artist">
                <Link to={`/artist/${artist._id}`}><h1>{artist.name}</h1></Link>
                <img src={artist.image} alt={artist.name} />
                <h3>{artist.title}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.first_name}
                    name="first_name"
                    placeholder="First Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.last_name}
                    name="last_name"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.username}
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.password}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.bio}
                    name="bio"
                    placeholder="Bio"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.profile_pic}
                    name="profile_pic"
                    placeholder="Profile Image"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.city}
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.state}
                    name="state"
                    placeholder="State"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.phone}
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Artist" />
            </form>
            {props.artist ? loaded() : loading()}
        </section>
    );
}

export default Artist;