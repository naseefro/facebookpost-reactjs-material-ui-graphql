import React from 'react';
import fbreaction from '../fbreaction.jpg'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chat from '@material-ui/icons/Chat';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Like from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import Divider from '@material-ui/core/Divider';
import Puplic from '@material-ui/icons/Public';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import MorehorizIcon from '@material-ui/icons/MoreHorizRounded';
import Icon from '@material-ui/icons/Public';


const myicon = {
    display: 'flex',

}
const mycard =
{

    maxWidth: '600px',
}
const media = {
    height: 0,
    paddingTop: '56.25%', // 16:9
}
const actions = {
    display: 'flex',
    fontColor: 'skyblue'
}
const expand = {
    transform: 'rotate(0deg)',

    marginLeft: 'auto',

}
const expandOpen = {
    transform: 'rotate(180deg)',

}
const avatar = {
    backgroundColor: red[500],
}
const center = {
    margin: 'auto',
    width: '800px',

}
const mydiv = {
    position: 'relative',
    height: '2em'
}
const myico = {
    position: 'absolute',
    top: '-12px',
    left: '12px'
}


const inlineb = {
    float: 'right'
}
const inlinel = {

    fontSize: '8',
    float: 'left'

}
const leftalign = {
    paddingTop: 3,
    paddingLeft: 5,
    fontSize: '15',
    float: 'left'
}


const PostsQuery = gql`
{
  fbposts{
     username
     id
     imageurl
     posts
   }
 }
 `;


class RecipeReviewCard extends React.Component {


    constructor(props) {

        super(props);
        this.state = {
            likes: 124,
            updated: false,
        }
        this.updateLikes = this.updateLikes.bind(this);
    }
    updateLikes() {

        if (!this.state.updated) {
            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes + 1,
                    updated: true,
                    color: 'skyblue'
                };
            });
        } else {

            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes - 1,
                    updated: false
                };
            });
        }


    }

    render() {
        const { data: { loading, fbposts } } = this.props;
        if (loading) {
            return null;
        }
        return (
            <div style={center}>{
                fbposts.map(fbpost => <div > <Card style={mycard}>
                    <CardHeader
                        avatar={
                            <Avatar src={fbpost.imageurl} aria-label="Recipe" >

                            </Avatar>
                        }
                        action={
                            <IconButton>
                                <MorehorizIcon />
                            </IconButton>
                        }
                        title={<div style={{ color: 'skyblue', fontSize: '20px' }}>{fbpost.username}</div>}
                        subheader={<div>
                            <Typography style={inlinel}>4 hrs </Typography> <Puplic style={leftalign} />
                        </div>}
                        myicon={
                            <Icon />
                        }
                    />
                    <CardMedia

                        image="/static/images/cards/paella.jpg"
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography component="p">{fbpost.posts}</Typography>

                    </CardContent>
                    <Divider light />

                    <CardContent >
                        <div >
                            <img style={inlinel} src={fbreaction} alt="boohoo" /><Typography style={inlinel}>{this.state.likes} </Typography>
                            <Typography style={inlineb}>10 Comments  <span> 2 Shares</span></Typography>
                        </div>
                        <br />
                    </CardContent>
                    <Divider />
                    <div style={{ textAlign: "center" }}> <IconButton onClick={this.updateLikes} aria-label="Add to favorites">
                        <Like />
                        <Typography component="p">
                            Like
                            </Typography>
                    </IconButton>


                        <IconButton aria-label="Share">
                            <Chat />
                            <Typography component="p">
                                Comment
                            </Typography>
                        </IconButton>

                        <IconButton aria-label="Share">
                            <ShareIcon />
                            <Typography component="p">
                                Share
                            </Typography>
                        </IconButton>
                    </div>
                </Card>
                </div>
                )}
            </div>
        );
    }
}



export default graphql(PostsQuery)(RecipeReviewCard);