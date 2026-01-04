import Image from "next/image";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  problem?: string;
  procedure?: string;
};

export default function ResultCard({
  beforeSrc,
  afterSrc,
  problem,
  procedure,
}: Props) {
  return (
    <div className="rounded-lg border border-border bg-white p-4">
      {/* Images */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Image
            src={beforeSrc}
            alt="Before treatment"
            width={500}
            height={500}
            className="rounded-md object-cover"
          />
          <p className="mt-2 text-xs text-muted">Before</p>
        </div>

        <div>
          <Image
            src={afterSrc}
            alt="After treatment"
            width={500}
            height={500}
            className="rounded-md object-cover"
          />
          <p className="mt-2 text-xs text-muted">After</p>
        </div>
      </div>

      {/* Text */}
      {(problem || procedure) && (
        <div className="mt-4 text-sm text-muted">
          {problem && (
            <p>
              <span className="font-medium text-foreground">Problem:</span>{" "}
              {problem}
            </p>
          )}
          {procedure && (
            <p className="mt-1">
              <span className="font-medium text-foreground">Procedure:</span>{" "}
              {procedure}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
