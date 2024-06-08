export interface Comentarios {
  subreddit_id: string;
  approved_at_utc: null;
  author_is_blocked: boolean;
  comment_type: null;
  awarders: any[];
  mod_reason_by: null;
  banned_by: null;
  author_flair_type: string;
  total_awards_received: number;
  subreddit: string;
  author_flair_template_id: string;
  likes: null;
  replies: string;
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: null;
  mod_reason_title: null;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: null;
  no_follow: boolean;
  author: string;
  can_mod_post: boolean;
  created_utc: number;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  approved_by: null;
  mod_note: null;
  all_awardings: any[];
  collapsed: boolean;
  body: string;
  edited: boolean;
  top_awarded_type: null;
  author_flair_css_class: null;
  name: string;
  is_submitter: boolean;
  downs: number;
  author_flair_richtext: Authorflairrichtext[];
  author_patreon_flair: boolean;
  body_html: string;
  removal_reason: null;
  collapsed_reason: null;
  distinguished: null;
  associated_award: null;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  gildings: Gildings;
  unrepliable_reason: null;
  author_flair_text_color: string;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: string;
  locked: boolean;
  report_reasons: null;
  created: number;
  media_metadata: Mediametadata;
  author_flair_text: string;
  treatment_tags: any[];
  link_id: string;
  subreddit_name_prefixed: string;
  controversiality: number;
  depth: number;
  author_flair_background_color: string;
  collapsed_because_crowd_control: null;
  mod_reports: any[];
  num_reports: null;
  ups: number;
}
  interface Mediametadata {
    '2f9axhs5e94d1': _2f9axhs5e94d1;
  }
  
  interface _2f9axhs5e94d1 {
    status: string;
    e: string;
    m: string;
    p: P[];
    s: P;
    id: string;
  }
  
  interface P {
    y: number;
    x: number;
    u: string;
  }
  
  interface Gildings {
  }
  
  interface Authorflairrichtext {
    e: string;
    t: string;
  }
