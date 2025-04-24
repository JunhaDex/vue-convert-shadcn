import { defineComponent, h, type Slots, type VNode } from 'vue'
import { cn } from '@/lib/utils.ts'

/**
 * Render function
 */
function renderCard(
  props: { className?: string },
  attrs: Record<string, unknown>,
  {
    slots,
  }: {
    slots: Slots
  },
): VNode {
  return h(
    'div',
    {
      class: cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        props.className,
      ),
      ...attrs,
    },
    slots.default ? slots.default() : [],
  )
}

function renderCardHeader(
  props: {
    className?: string
  },
  attrs: Record<string, unknown>,
  { slots }: { slots: Slots },
): VNode {
  return h(
    'div',
    {
      class: cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        props.className,
      ),
      ...attrs,
    },
    slots.default ? slots.default() : [],
  )
}

function renderCardTitle(
  props: { className?: string },
  attrs: Record<string, unknown>,
  {
    slots,
  }: {
    slots: Slots
  },
): VNode {
  return h(
    'div',
    {
      class: cn('leading-none font-semibold', props.className),
      ...attrs,
    },
    slots.default ? slots.default() : [],
  )
}

function renderCardDescription(
  props: {
    className?: string
  },
  attrs: Record<string, unknown>,
  { slots }: { slots: Slots },
): VNode {
  return h(
    'div',
    {
      class: cn('text-muted-foreground text-sm', props.className),
      ...attrs,
    },
    slots.default ? slots.default() : [],
  )
}

function renderCardAction(
  props: {
    className?: string
  },
  attrs: Record<string, unknown>,
  { slots }: { slots: Slots },
): VNode {
  return h(
    'div',
    {
      class: cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', props.className),
      ...attrs,
    },
    slots.default ? slots.default() : [],
  )
}

function renderCardContent(
  props: {
    className?: string
  },
  attrs: Record<string, unknown>,
  { slots }: { slots: Slots },
): VNode {
  return h(
    'div',
    {
      class: cn('px-6', props.className),
      ...attrs,
    },
    slots.default ? slots.default() : [],
  )
}

function renderCardFooter(
  props: {
    className?: string
  },
  attrs: Record<string, unknown>,
  { slots }: { slots: Slots },
): VNode {
  return h(
    'div',
    {
      class: cn('flex items-center px-6 [.border-t]:pt-6', props.className),
      ...attrs,
    },
    slots.default ? slots.default() : [],
  )
}

/**
 * Vue components
 */
const Card = defineComponent({
  name: 'Card',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots, attrs }) {
    return () => renderCard(props, attrs, { slots })
  },
})
const CardHeader = defineComponent({
  name: 'CardHeader',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots, attrs }) {
    return () => renderCardHeader(props, attrs, { slots })
  },
})
const CardTitle = defineComponent({
  name: 'CardTitle',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots, attrs }) {
    return () => renderCardTitle(props, attrs, { slots })
  },
})
const CardDescription = defineComponent({
  name: 'CardDescription',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots, attrs }) {
    return () => renderCardDescription(props, attrs, { slots })
  },
})
const CardAction = defineComponent({
  name: 'CardAction',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots, attrs }) {
    return () => renderCardAction(props, attrs, { slots })
  },
})
const CardContent = defineComponent({
  name: 'CardContent',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots, attrs }) {
    return () => renderCardContent(props, attrs, { slots })
  },
})
const CardFooter = defineComponent({
  name: 'CardFooter',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots, attrs }) {
    return () => renderCardFooter(props, attrs, { slots })
  },
})

export { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter }
