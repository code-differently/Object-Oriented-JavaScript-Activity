
    let post = {
        name: "Hina Omar",
        message: "Hello Everyone",
        likes: 0,
        addLike: function (num=1) {
            this.likes+=num;
            },
        location: "Delaware",
        
    };
    console.log(post);

    //Dot notation access
    console.log(post.name);

    //bracket notation access
    console.log(post["message"]);

    //dot notation update or modify
    post.message = "How is everybody doing";
    console.log(post.message);

    //bracket notation update/modify
    post["location"]="Bear, Delaware";
    console.log(post.location);