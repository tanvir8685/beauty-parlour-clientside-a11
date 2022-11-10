import React from 'react';


const AddPersonalService = () => {
    const handleService=(event)=>{
        event.preventDefault();
        const form = event.target;
        const id=form.id.value;
        const img=form.img.value;
        const title=form.title.value;
        const price=form.price.value;
        const detail=form.detail.value;
        console.log(img,title,price,detail)
        const personalServicedb={
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
                    <input  type="text" name='id' placeholder="Type here" className="input input-bordered input-md" />
                    <input  type="text" name='img' placeholder="Type here" className="input input-bordered input-md" />
                    <input  type="text" name='title' placeholder="Type here" className="input input-bordered input-md" />
                    <input  type="text" name='price' placeholder="Type here" className="input input-bordered input-md" />
                    <input  type="text" name='detail' placeholder="Type here" className="input input-bordered input-md" />
                        <button>submit</button>
                    </label>

                </div>

            </form>
            
        </div>
    );
};

export default AddPersonalService;