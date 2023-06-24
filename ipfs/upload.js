    async function run() {
        const { create } = await import('ipfs-http-client');
        const ipfs = await create();
        
        // You can add as many attributes as you want!
        const metadata = {
            path: '/',
            content: JSON.stringify({
                name: "Cutie Kitita",
                attributes: [
                {
                    "trait_type": "Lovely",
                    "value": "100" 
                },
                {
                    "trait_type": "Cutie",
                    "value": "100"
                },
                {
                    "trait_type": "Made wtih Love",
                    "value": "100"
                },  
                {
                    "trait_type": "Uploaded to IPFS by",
                    "value": "GetMoustache"
                },
                ],
                // update the IPFS CID to be your image CID
                image: "https://ipfs.io/ipfs/QmeE9awYCG71KbgVKmYECF4v9gATttMEJQ8ti6TR5Hm9Bs",
                description: "The best kitita!"
            })
        };

        const result = await ipfs.add(metadata);
        console.log(result);

        process.exit(0);
    }

    run();