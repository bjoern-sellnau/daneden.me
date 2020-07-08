import Markdown from "@/utils/Markdown"
import React, { FunctionComponent } from "react"
import ScriptTag from "react-script-tag"
import { Caption, Figure } from "./designSystem"

interface CFVideoProps {
  autoPlay: boolean
  caption?: string
  controls: boolean
  id: string
  loop: boolean
  preload: boolean
}

const CFVideo: FunctionComponent<CFVideoProps> = ({
  autoPlay = false,
  caption,
  controls = true,
  id,
  loop = false,
  preload = true,
}) => {
  return (
    <Figure>
      <stream
        autoPlay={autoPlay}
        preload={String(preload)}
        controls={controls}
        loop={loop}
        src={id}
      ></stream>
      <ScriptTag
        data-cfasync="false"
        defer
        type="text/javascript"
        src={`https://embed.videodelivery.net/embed/r4xu.fla9.latest.js?video=${id}`}
      />
      {caption && (
        <Caption>
          <Markdown>{caption}</Markdown>
        </Caption>
      )}
    </Figure>
  )
}

export default CFVideo
