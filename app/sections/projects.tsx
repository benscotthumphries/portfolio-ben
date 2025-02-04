import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  githubLink: string;
}

interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <div className="personal-projects">
      <Typography variant="h2" gutterBottom>Personal Projects</Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              {project.imageUrl && (
                <CardMedia
                  component="img"
                  height="200"
                  image={project.imageUrl}
                  alt={project.title}
                />
              )}
              <CardContent>
                <Typography variant="h5" component="h3">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{project.description}</Typography>
              </CardContent>
              <Button variant="contained" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Link
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
