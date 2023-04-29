export default {
    name: 'page',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'headline',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'subHeadline',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'callToAction',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'buttonText',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'buttonLink',
        type: 'url',
        validation: Rule => Rule.required(),
      },
      {
        name: 'timerText',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'trackerClickUrl',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'subParameters',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
        validation: Rule => Rule.max(12),
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'headline',
        media: 'image',
      },
    },
  }