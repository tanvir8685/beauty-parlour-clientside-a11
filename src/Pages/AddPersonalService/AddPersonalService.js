import React from 'react';
import useTitle from '../../hooks/useTitle';


const AddPersonalService = () => {
    useTitle('addService')
    const handleService = (event) => {
        event.preventDefault();
        const form = event.target;
        const id = form.id.value;
        const img = form.img.value;
        const title = form.title.value;
        const price = form.price.value;
        const detail = form.detail.value;
        console.log(img, title, price, detail)
        const personalServicedb = {
            title,
            img,
            price,
            detail
        }
        fetch('https://beauty-parlour-server-nine.vercel.app/addPersonalService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(personalServicedb)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                }
                console.log(data)
            })
            .catch(err => console.error(err))
    }
    return (
        <div >
            <form onSubmit={handleService}>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <input type="text" name='img' placeholder="please image url" className="input input-bordered input-md m-4" /> <br />
                    </label>
                    <label className="input-group input-group-md" >
                        <input type="text" name='id' placeholder="Type here" className="input input-bordered input-md m-4" /> <br />

                    </label>


                    <label className="input-group input-group-md" >
                        <input type="text" name='title' placeholder="give a title" className="input input-bordered input-md m-4" /> <br />

                    </label>
                    <label className="input-group input-group-md">
                        <input type="text" name='price' placeholder="price" className="input input-bordered input-md m-4" /> <br />

                    </label>
                    <label className="input-group input-group-md">
                        <input type="text" name='detail' placeholder="details" className="input input-bordered input-md m-4" /> <br />
                    </label>


                    <button className='btn btn-primary'>submit</button>


                </div>

            </form>

        </div>
    );
};

export default AddPersonalService;