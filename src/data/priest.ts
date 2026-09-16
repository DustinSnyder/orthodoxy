export interface AddressTip {
  title: string
  detail: string
}

export interface BlessingStep {
  step: number
  title: string
  detail: string
}

export const addressTips: AddressTip[] = [
  {
    title: 'Your parish priest: “Father [First Name]”',
    detail:
      'In Antiochian / US parish practice, address the priest as Father followed by his first name — e.g. Father Symeon. This is the normal, respectful form in conversation and email.',
  },
  {
    title: '“Father” alone',
    detail:
      'Once you are speaking with him, “Father” or “yes, Father” is natural and warm. You do not need to repeat the full name every sentence.',
  },
  {
    title: 'First meetings vs. familiarity',
    detail:
      'At first meetings, err on the side of formality and attentiveness. As the pastoral relationship grows, many priests are warmly approachable — still respectful, never casual in a way that treats priesthood as a hobby. Follow his lead; when unsure, ask.',
  },
  {
    title: 'Bishops & metropolitans (light overview)',
    detail:
      'A bishop is commonly addressed as “Your Grace” (practices can vary by local custom); a metropolitan often “Your Eminence.” You will rarely need this weekly — if a hierarch visits, watch how parishioners greet him or ask Fr. Symeon beforehand. Do not panic; sincerity matters more than perfect protocol.',
  },
  {
    title: 'In writing',
    detail:
      'Email/text: “Dear Father Symeon,” then clear, concise requests. Sign with your name. Avoid demanding tone; priests carry many souls.',
  },
]

export const whenToAskBlessing: string[] = [
  'When greeting the priest (especially after services, if the line/custom allows)',
  'After Holy Confession',
  'Before travel, surgery, major decisions, or a new obedience/prayer rule',
  'When introducing family members who want a blessing',
  'At pastoral appointments when beginning or ending, if customary',
  'Whenever he offers — receive gladly; do not refuse out of shyness if you can help it',
]

export const blessingSteps: BlessingStep[] = [
  {
    step: 1,
    title: 'Approach calmly',
    detail:
      'Wait your turn if others are speaking with him. Come near without rushing or grabbing. Phone away; hands free.',
  },
  {
    step: 2,
    title: 'Right hand over left (cupped)',
    detail:
      'Common practice: hold your hands palms up, right hand over left, forming a gentle “cup” to receive the blessing as a gift.',
  },
  {
    step: 3,
    title: 'Say: “Father, bless.”',
    detail:
      'Simple and sufficient. You may add a brief intention quietly (“for travel,” “for my family”) if appropriate — keep it short.',
  },
  {
    step: 4,
    title: 'He traces the sign of the Cross & blesses',
    detail:
      'The priest blesses with the sign of the Cross (often with his hand in a Christogram form). Receive still and attentive.',
  },
  {
    step: 5,
    title: 'Kiss the hand (if customary)',
    detail:
      'In many Orthodox parishes, the faithful kiss the priest’s hand after the blessing — honoring Christ who works through the priesthood, not flattering a personality. If you are unsure or physically unable, a reverent bow is better than awkwardness; watch local custom at St. Raphael and ask Fr. Symeon privately if needed.',
  },
  {
    step: 6,
    title: 'Step back with thanks',
    detail:
      'A quiet “Thank you, Father” is enough. Then make space for the next person.',
  },
]

export const priestPastoralNotes: string[] = [
  'Customs vary slightly by parish and by the priest’s preference. Local practice at Saint Raphael under Fr. Symeon is your guide.',
  'Never treat a blessing as magic luck — it is the Church’s prayer and the priest’s pastoral care invoking God’s grace.',
  'If mobility, germ concerns, or trauma make hand-kissing difficult, say so privately; pastors understand accommodations.',
  'Catechumens: learning these gestures is part of belonging. Mistakes are forgiven; love covers awkward first tries.',
]
