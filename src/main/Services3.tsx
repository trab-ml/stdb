import React from 'react';

type Testimonial = {
  author: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    author: 'John Doe.',
    testimonial:
      'I travel a lot, what i found amazing with STDB is their capacity to allow me transactions anytime and anywhere.',
  },
  {
    author: 'John Doe.',
    testimonial:
      'I travel a lot, what i found amazing with STDB is their capacity to allow me transactions anytime and anywhere.',
  },
  {
    author: 'John Doe.',
    testimonial:
      'I travel a lot, what i found amazing with STDB is their capacity to allow me transactions anytime and anywhere.',
  },
  {
    author: 'John Doe.',
    testimonial:
      'I travel a lot, what i found amazing with STDB is their capacity to allow me transactions anytime and anywhere.',
  },
  {
    author: 'John Doe.',
    testimonial:
      'I travel a lot, what i found amazing with STDB is their capacity to allow me transactions anytime and anywhere.',
  },
  {
    author: 'John Doe.',
    testimonial:
      'I travel a lot, what i found amazing with STDB is their capacity to allow me transactions anytime and anywhere.',
  },
  {
    author: 'John Doe.',
    testimonial:
      'I travel a lot, what i found amazing with STDB is their capacity to allow me transactions anytime and anywhere.',
  },
  {
    author: 'John Doe.',
    testimonial:
      'I travel a lot, what i found amazing with STDB is their capacity to allow me transactions anytime and anywhere.',
  },
];

const TestimonialCell: React.FC<Testimonial> = React.memo(
  ({ testimonial, author }) => (
    <div className="testimonial-cell">
      <p>{testimonial}</p>
      <small>{author}</small>
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.testimonial === nextProps.testimonial &&
    prevProps.author === nextProps.author
);

const Services3: React.FC = () => {
  return (
    <div className="services3-container">
      <div className="services3-heading">
        <h1>You're in good company!</h1>
        <p>Here are some testimonials.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCell
            key={index}
            testimonial={testimonial.testimonial}
            author={testimonial.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Services3;
