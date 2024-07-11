import Data from './Data';
import { faker } from '@faker-js/faker';

const DataList = () => {
    const generateComments = (num) => {
        let comments = [];
        for (let i = 0; i < num; i++) {
            comments.push({
                user: faker.name.firstName(),
                time: faker.date.recent().toLocaleString(),
                text: faker.lorem.sentence(),
                avatar: faker.image.avatar()
            });
        }
        return comments;
    };
    const comments = generateComments(3);
    return (
        <div className="App">
            {comments.map((comment, index) => (
                <Data
                    key={index}
                    user={comment.user}
                    time={comment.time}
                    text={comment.text}
                    avatar={comment.avatar}
                />
            ))}
        </div>
    );
};

export default DataList;
