export default {
    table: {
        class: [
            // Spacing & Position
            'mx-auto my-0',

            // Table Style
            'border-spacing-0 border-separate'
        ]
    },
    cell: {
        class: [
            // Alignment
            'text-center align-top',

            // Spacing
            'py-0 px-3'
        ]
    },
    node: ({ props, context }) => ({
        class: [
            'relative inline-block',

            // Spacing
            'p-5',

            // Shape
            'rounded',

            // Color
            {
                'text-surface-600 dark:text-white/80': !context?.selected,
                'bg-surface-0 dark:bg-surface-800': !context?.selected,
                'border-surface-200 dark:border-surface-700': !context?.selected,
                'text-primary-highlight-inverse': context?.selected,
                'bg-primary-highlight': context?.selected,
                'border-primary-200 dark:border-primary-600': context?.selected
            },

            // States
            {
                'hover:bg-surface-100 dark:hover:bg-surface-700': context?.selectable && !context?.selected,
                'hover:bg-primary-highlight-hover': context?.selectable && context?.selected
            },

            { 'cursor-pointer': context?.selectable }
        ]
    }),
    linecell: {
        class: [
            // Alignment
            'text-center align-top',

            // Spacing
            'py-0 px-5'
        ]
    },
    linedown: {
        class: [
            // Spacing
            'mx-auto my-0',

            // Size
            'w-px h-[30px]',

            // Color
            'bg-gray-400 dark:bg-gray-800'
        ]
    },
    lineleft: ({ context }) => ({
        class: [
            // Alignment
            'text-center align-top',

            // Spacing
            'py-0 px-3',

            // Shape
            'rounded-none border-r',
            { 'border-t': context.lineTop },

            // Color
            'border-gray-400 dark:border-gray-800'
        ]
    }),
    lineright: ({ context }) => ({
        class: [
            // Alignment
            'text-center align-top',

            // Spacing
            'py-0 px-3',

            // Shape
            'rounded-none',

            // Color
            { 'border-t border-gray-400 dark:border-gray-800': context.lineTop }
        ]
    }),
    nodecell: {
        class: 'text-center align-top py-0 px-3'
    },
    nodetoggler: {
        class: [
            // Position
            'absolute bottom-[-0.75rem] left-2/4 -ml-3',
            'z-20',

            // Flexbox
            'flex items-center justify-center',

            // Size
            'w-6 h-6',

            // Shape
            'rounded-full',

            // Color
            'bg-inherit text-inherit',

            // Focus
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Misc
            'cursor-pointer no-underline select-none'
        ]
    },
    nodetogglericon: {
        class: [
            // Position
            'relative inline-block',

            // Size
            'w-4 h-4'
        ]
    }
};
