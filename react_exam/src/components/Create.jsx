function Create() {
    return (
            <div id="body">
                <div className="header">
                    <div className="create">
                        <h1>Create</h1>
                        <h2>What is your project?</h2>
                        <form>
                            <input type="text" name="title" placeholder="TITLE" ></input>
                            <input type="url" name="imageUrl" placeholder="IMAGE-URL"></input>
                            <input type="text" name="subtitle" placeholder="SUB-TITLE"></input>
                            <textarea type="text" name="description" placeholder="DESCRIPTION"></textarea>
                            <input type="submit" value="Create" id="submit" />
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
export default Create