
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CreatorProfile
 * 
 */
export type CreatorProfile = $Result.DefaultSelection<Prisma.$CreatorProfilePayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model PaymentTransaction
 * 
 */
export type PaymentTransaction = $Result.DefaultSelection<Prisma.$PaymentTransactionPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model PremiumPurchase
 * 
 */
export type PremiumPurchase = $Result.DefaultSelection<Prisma.$PremiumPurchasePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CREATOR: 'CREATOR',
  BUSINESS: 'BUSINESS',
  CONSUMER: 'CONSUMER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const VerificationStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


<<<<<<< HEAD
export const ModerationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  REMOVED: 'REMOVED'
};

export type ModerationStatus = (typeof ModerationStatus)[keyof typeof ModerationStatus]


=======
>>>>>>> origin/Aziza_branch
export const CampaignStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const ContentType: {
  video: 'video',
  image: 'image',
  article: 'article',
  audio: 'audio'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const ContentVisibility: {
  public: 'public',
  paid: 'paid'
};

export type ContentVisibility = (typeof ContentVisibility)[keyof typeof ContentVisibility]


export const PaymentType: {
  SUBSCRIPTION: 'SUBSCRIPTION',
  PRODUCT_PURCHASE: 'PRODUCT_PURCHASE',
  CAMPAIGN_PAYMENT: 'CAMPAIGN_PAYMENT',
  WITHDRAWAL: 'WITHDRAWAL',
  CAMPAIGN_DISBURSEMENT: 'CAMPAIGN_DISBURSEMENT'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  COMPLETED: 'COMPLETED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type ContentVisibility = $Enums.ContentVisibility

export const ContentVisibility: typeof $Enums.ContentVisibility

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creatorProfile`: Exposes CRUD operations for the **CreatorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreatorProfiles
    * const creatorProfiles = await prisma.creatorProfile.findMany()
    * ```
    */
  get creatorProfile(): Prisma.CreatorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentTransaction`: Exposes CRUD operations for the **PaymentTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentTransactions
    * const paymentTransactions = await prisma.paymentTransaction.findMany()
    * ```
    */
  get paymentTransaction(): Prisma.PaymentTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.premiumPurchase`: Exposes CRUD operations for the **PremiumPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PremiumPurchases
    * const premiumPurchases = await prisma.premiumPurchase.findMany()
    * ```
    */
  get premiumPurchase(): Prisma.PremiumPurchaseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CreatorProfile: 'CreatorProfile',
    Content: 'Content',
    Campaign: 'Campaign',
    Application: 'Application',
    PaymentTransaction: 'PaymentTransaction',
    Message: 'Message',
    PremiumPurchase: 'PremiumPurchase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "creatorProfile" | "content" | "campaign" | "application" | "paymentTransaction" | "message" | "premiumPurchase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CreatorProfile: {
        payload: Prisma.$CreatorProfilePayload<ExtArgs>
        fields: Prisma.CreatorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreatorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreatorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          findFirst: {
            args: Prisma.CreatorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreatorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          findMany: {
            args: Prisma.CreatorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>[]
          }
          create: {
            args: Prisma.CreatorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          createMany: {
            args: Prisma.CreatorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreatorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>[]
          }
          delete: {
            args: Prisma.CreatorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          update: {
            args: Prisma.CreatorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          deleteMany: {
            args: Prisma.CreatorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreatorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreatorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>[]
          }
          upsert: {
            args: Prisma.CreatorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          aggregate: {
            args: Prisma.CreatorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreatorProfile>
          }
          groupBy: {
            args: Prisma.CreatorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreatorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreatorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CreatorProfileCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      PaymentTransaction: {
        payload: Prisma.$PaymentTransactionPayload<ExtArgs>
        fields: Prisma.PaymentTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          findFirst: {
            args: Prisma.PaymentTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          findMany: {
            args: Prisma.PaymentTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          create: {
            args: Prisma.PaymentTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          createMany: {
            args: Prisma.PaymentTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          delete: {
            args: Prisma.PaymentTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          update: {
            args: Prisma.PaymentTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          deleteMany: {
            args: Prisma.PaymentTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          upsert: {
            args: Prisma.PaymentTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          aggregate: {
            args: Prisma.PaymentTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentTransaction>
          }
          groupBy: {
            args: Prisma.PaymentTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentTransactionCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      PremiumPurchase: {
        payload: Prisma.$PremiumPurchasePayload<ExtArgs>
        fields: Prisma.PremiumPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PremiumPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PremiumPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload>
          }
          findFirst: {
            args: Prisma.PremiumPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PremiumPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload>
          }
          findMany: {
            args: Prisma.PremiumPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload>[]
          }
          create: {
            args: Prisma.PremiumPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload>
          }
          createMany: {
            args: Prisma.PremiumPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PremiumPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload>[]
          }
          delete: {
            args: Prisma.PremiumPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload>
          }
          update: {
            args: Prisma.PremiumPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload>
          }
          deleteMany: {
            args: Prisma.PremiumPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PremiumPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PremiumPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload>[]
          }
          upsert: {
            args: Prisma.PremiumPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumPurchasePayload>
          }
          aggregate: {
            args: Prisma.PremiumPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePremiumPurchase>
          }
          groupBy: {
            args: Prisma.PremiumPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PremiumPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PremiumPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PremiumPurchaseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    creatorProfile?: CreatorProfileOmit
    content?: ContentOmit
    campaign?: CampaignOmit
    application?: ApplicationOmit
    paymentTransaction?: PaymentTransactionOmit
    message?: MessageOmit
    premiumPurchase?: PremiumPurchaseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contents: number
    campaigns: number
    sentMessages: number
    receivedMessages: number
    paymentTransactions: number
    premiumPurchases: number
    applications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | UserCountOutputTypeCountContentsArgs
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    paymentTransactions?: boolean | UserCountOutputTypeCountPaymentTransactionsArgs
    premiumPurchases?: boolean | UserCountOutputTypeCountPremiumPurchasesArgs
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPremiumPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremiumPurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type CreatorProfileCountOutputType
   */

  export type CreatorProfileCountOutputType = {
    contents: number
  }

  export type CreatorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | CreatorProfileCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * CreatorProfileCountOutputType without action
   */
  export type CreatorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfileCountOutputType
     */
    select?: CreatorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreatorProfileCountOutputType without action
   */
  export type CreatorProfileCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }


  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    premiumPurchases: number
  }

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premiumPurchases?: boolean | ContentCountOutputTypeCountPremiumPurchasesArgs
  }

  // Custom InputTypes
  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountPremiumPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremiumPurchaseWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    applications: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | CampaignCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    profileImage: string | null
    role: $Enums.Role | null
    verificationStatus: $Enums.VerificationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    profileImage: string | null
    role: $Enums.Role | null
    verificationStatus: $Enums.VerificationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    profileImage: number
    role: number
    verificationStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profileImage?: true
    role?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profileImage?: true
    role?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profileImage?: true
    role?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    profileImage: string | null
    role: $Enums.Role
    verificationStatus: $Enums.VerificationStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorProfile?: boolean | User$creatorProfileArgs<ExtArgs>
    contents?: boolean | User$contentsArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    paymentTransactions?: boolean | User$paymentTransactionsArgs<ExtArgs>
    premiumPurchases?: boolean | User$premiumPurchasesArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "profileImage" | "role" | "verificationStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creatorProfile?: boolean | User$creatorProfileArgs<ExtArgs>
    contents?: boolean | User$contentsArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    paymentTransactions?: boolean | User$paymentTransactionsArgs<ExtArgs>
    premiumPurchases?: boolean | User$premiumPurchasesArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      creatorProfile: Prisma.$CreatorProfilePayload<ExtArgs> | null
      contents: Prisma.$ContentPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      paymentTransactions: Prisma.$PaymentTransactionPayload<ExtArgs>[]
      premiumPurchases: Prisma.$PremiumPurchasePayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      profileImage: string | null
      role: $Enums.Role
      verificationStatus: $Enums.VerificationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creatorProfile<T extends User$creatorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$creatorProfileArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contents<T extends User$contentsArgs<ExtArgs> = {}>(args?: Subset<T, User$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentTransactions<T extends User$paymentTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    premiumPurchases<T extends User$premiumPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$premiumPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly verificationStatus: FieldRef<"User", 'VerificationStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.creatorProfile
   */
  export type User$creatorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    where?: CreatorProfileWhereInput
  }

  /**
   * User.contents
   */
  export type User$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.paymentTransactions
   */
  export type User$paymentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    where?: PaymentTransactionWhereInput
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    cursor?: PaymentTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * User.premiumPurchases
   */
  export type User$premiumPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    where?: PremiumPurchaseWhereInput
    orderBy?: PremiumPurchaseOrderByWithRelationInput | PremiumPurchaseOrderByWithRelationInput[]
    cursor?: PremiumPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PremiumPurchaseScalarFieldEnum | PremiumPurchaseScalarFieldEnum[]
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CreatorProfile
   */

  export type AggregateCreatorProfile = {
    _count: CreatorProfileCountAggregateOutputType | null
    _avg: CreatorProfileAvgAggregateOutputType | null
    _sum: CreatorProfileSumAggregateOutputType | null
    _min: CreatorProfileMinAggregateOutputType | null
    _max: CreatorProfileMaxAggregateOutputType | null
  }

  export type CreatorProfileAvgAggregateOutputType = {
    earnings: number | null
    followers: number | null
  }

  export type CreatorProfileSumAggregateOutputType = {
    earnings: number | null
    followers: number | null
  }

  export type CreatorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    specialization: string | null
    socialLinks: string | null
    payout_account: string | null
    earnings: number | null
    followers: number | null
    avatar: string | null
    location: string | null
    payout_network: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreatorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    specialization: string | null
    socialLinks: string | null
    payout_account: string | null
    earnings: number | null
    followers: number | null
    avatar: string | null
    location: string | null
    payout_network: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreatorProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    specialization: number
    socialLinks: number
    payout_account: number
    earnings: number
    followers: number
    avatar: number
    location: number
    payout_network: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreatorProfileAvgAggregateInputType = {
    earnings?: true
    followers?: true
  }

  export type CreatorProfileSumAggregateInputType = {
    earnings?: true
    followers?: true
  }

  export type CreatorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    specialization?: true
    socialLinks?: true
    payout_account?: true
    earnings?: true
    followers?: true
    avatar?: true
    location?: true
    payout_network?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreatorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    specialization?: true
    socialLinks?: true
    payout_account?: true
    earnings?: true
    followers?: true
    avatar?: true
    location?: true
    payout_network?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreatorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    specialization?: true
    socialLinks?: true
    payout_account?: true
    earnings?: true
    followers?: true
    avatar?: true
    location?: true
    payout_network?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreatorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreatorProfile to aggregate.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreatorProfiles
    **/
    _count?: true | CreatorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreatorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreatorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatorProfileMaxAggregateInputType
  }

  export type GetCreatorProfileAggregateType<T extends CreatorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCreatorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreatorProfile[P]>
      : GetScalarType<T[P], AggregateCreatorProfile[P]>
  }




  export type CreatorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatorProfileWhereInput
    orderBy?: CreatorProfileOrderByWithAggregationInput | CreatorProfileOrderByWithAggregationInput[]
    by: CreatorProfileScalarFieldEnum[] | CreatorProfileScalarFieldEnum
    having?: CreatorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreatorProfileCountAggregateInputType | true
    _avg?: CreatorProfileAvgAggregateInputType
    _sum?: CreatorProfileSumAggregateInputType
    _min?: CreatorProfileMinAggregateInputType
    _max?: CreatorProfileMaxAggregateInputType
  }

  export type CreatorProfileGroupByOutputType = {
    id: string
    userId: string
    bio: string | null
    specialization: string | null
    socialLinks: string | null
    payout_account: string | null
    earnings: number
    followers: number
    avatar: string | null
    location: string | null
    payout_network: string | null
    createdAt: Date
    updatedAt: Date
    _count: CreatorProfileCountAggregateOutputType | null
    _avg: CreatorProfileAvgAggregateOutputType | null
    _sum: CreatorProfileSumAggregateOutputType | null
    _min: CreatorProfileMinAggregateOutputType | null
    _max: CreatorProfileMaxAggregateOutputType | null
  }

  type GetCreatorProfileGroupByPayload<T extends CreatorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreatorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreatorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreatorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CreatorProfileGroupByOutputType[P]>
        }
      >
    >


  export type CreatorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    specialization?: boolean
    socialLinks?: boolean
    payout_account?: boolean
    earnings?: boolean
    followers?: boolean
    avatar?: boolean
    location?: boolean
    payout_network?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contents?: boolean | CreatorProfile$contentsArgs<ExtArgs>
    _count?: boolean | CreatorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creatorProfile"]>

  export type CreatorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    specialization?: boolean
    socialLinks?: boolean
    payout_account?: boolean
    earnings?: boolean
    followers?: boolean
    avatar?: boolean
    location?: boolean
    payout_network?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creatorProfile"]>

  export type CreatorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    specialization?: boolean
    socialLinks?: boolean
    payout_account?: boolean
    earnings?: boolean
    followers?: boolean
    avatar?: boolean
    location?: boolean
    payout_network?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creatorProfile"]>

  export type CreatorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    specialization?: boolean
    socialLinks?: boolean
    payout_account?: boolean
    earnings?: boolean
    followers?: boolean
    avatar?: boolean
    location?: boolean
    payout_network?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreatorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "specialization" | "socialLinks" | "payout_account" | "earnings" | "followers" | "avatar" | "location" | "payout_network" | "createdAt" | "updatedAt", ExtArgs["result"]["creatorProfile"]>
  export type CreatorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contents?: boolean | CreatorProfile$contentsArgs<ExtArgs>
    _count?: boolean | CreatorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreatorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreatorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreatorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreatorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contents: Prisma.$ContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bio: string | null
      specialization: string | null
      socialLinks: string | null
      payout_account: string | null
      earnings: number
      followers: number
      avatar: string | null
      location: string | null
      payout_network: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creatorProfile"]>
    composites: {}
  }

  type CreatorProfileGetPayload<S extends boolean | null | undefined | CreatorProfileDefaultArgs> = $Result.GetResult<Prisma.$CreatorProfilePayload, S>

  type CreatorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreatorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreatorProfileCountAggregateInputType | true
    }

  export interface CreatorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreatorProfile'], meta: { name: 'CreatorProfile' } }
    /**
     * Find zero or one CreatorProfile that matches the filter.
     * @param {CreatorProfileFindUniqueArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreatorProfileFindUniqueArgs>(args: SelectSubset<T, CreatorProfileFindUniqueArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreatorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreatorProfileFindUniqueOrThrowArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreatorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CreatorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreatorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileFindFirstArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreatorProfileFindFirstArgs>(args?: SelectSubset<T, CreatorProfileFindFirstArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreatorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileFindFirstOrThrowArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreatorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CreatorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreatorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreatorProfiles
     * const creatorProfiles = await prisma.creatorProfile.findMany()
     * 
     * // Get first 10 CreatorProfiles
     * const creatorProfiles = await prisma.creatorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creatorProfileWithIdOnly = await prisma.creatorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreatorProfileFindManyArgs>(args?: SelectSubset<T, CreatorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreatorProfile.
     * @param {CreatorProfileCreateArgs} args - Arguments to create a CreatorProfile.
     * @example
     * // Create one CreatorProfile
     * const CreatorProfile = await prisma.creatorProfile.create({
     *   data: {
     *     // ... data to create a CreatorProfile
     *   }
     * })
     * 
     */
    create<T extends CreatorProfileCreateArgs>(args: SelectSubset<T, CreatorProfileCreateArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreatorProfiles.
     * @param {CreatorProfileCreateManyArgs} args - Arguments to create many CreatorProfiles.
     * @example
     * // Create many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreatorProfileCreateManyArgs>(args?: SelectSubset<T, CreatorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreatorProfiles and returns the data saved in the database.
     * @param {CreatorProfileCreateManyAndReturnArgs} args - Arguments to create many CreatorProfiles.
     * @example
     * // Create many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreatorProfiles and only return the `id`
     * const creatorProfileWithIdOnly = await prisma.creatorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreatorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CreatorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreatorProfile.
     * @param {CreatorProfileDeleteArgs} args - Arguments to delete one CreatorProfile.
     * @example
     * // Delete one CreatorProfile
     * const CreatorProfile = await prisma.creatorProfile.delete({
     *   where: {
     *     // ... filter to delete one CreatorProfile
     *   }
     * })
     * 
     */
    delete<T extends CreatorProfileDeleteArgs>(args: SelectSubset<T, CreatorProfileDeleteArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreatorProfile.
     * @param {CreatorProfileUpdateArgs} args - Arguments to update one CreatorProfile.
     * @example
     * // Update one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreatorProfileUpdateArgs>(args: SelectSubset<T, CreatorProfileUpdateArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreatorProfiles.
     * @param {CreatorProfileDeleteManyArgs} args - Arguments to filter CreatorProfiles to delete.
     * @example
     * // Delete a few CreatorProfiles
     * const { count } = await prisma.creatorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreatorProfileDeleteManyArgs>(args?: SelectSubset<T, CreatorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreatorProfileUpdateManyArgs>(args: SelectSubset<T, CreatorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatorProfiles and returns the data updated in the database.
     * @param {CreatorProfileUpdateManyAndReturnArgs} args - Arguments to update many CreatorProfiles.
     * @example
     * // Update many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreatorProfiles and only return the `id`
     * const creatorProfileWithIdOnly = await prisma.creatorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreatorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CreatorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreatorProfile.
     * @param {CreatorProfileUpsertArgs} args - Arguments to update or create a CreatorProfile.
     * @example
     * // Update or create a CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.upsert({
     *   create: {
     *     // ... data to create a CreatorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreatorProfile we want to update
     *   }
     * })
     */
    upsert<T extends CreatorProfileUpsertArgs>(args: SelectSubset<T, CreatorProfileUpsertArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreatorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileCountArgs} args - Arguments to filter CreatorProfiles to count.
     * @example
     * // Count the number of CreatorProfiles
     * const count = await prisma.creatorProfile.count({
     *   where: {
     *     // ... the filter for the CreatorProfiles we want to count
     *   }
     * })
    **/
    count<T extends CreatorProfileCountArgs>(
      args?: Subset<T, CreatorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreatorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreatorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreatorProfileAggregateArgs>(args: Subset<T, CreatorProfileAggregateArgs>): Prisma.PrismaPromise<GetCreatorProfileAggregateType<T>>

    /**
     * Group by CreatorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreatorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreatorProfileGroupByArgs['orderBy'] }
        : { orderBy?: CreatorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreatorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreatorProfile model
   */
  readonly fields: CreatorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreatorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreatorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contents<T extends CreatorProfile$contentsArgs<ExtArgs> = {}>(args?: Subset<T, CreatorProfile$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreatorProfile model
   */
  interface CreatorProfileFieldRefs {
    readonly id: FieldRef<"CreatorProfile", 'String'>
    readonly userId: FieldRef<"CreatorProfile", 'String'>
    readonly bio: FieldRef<"CreatorProfile", 'String'>
    readonly specialization: FieldRef<"CreatorProfile", 'String'>
    readonly socialLinks: FieldRef<"CreatorProfile", 'String'>
    readonly payout_account: FieldRef<"CreatorProfile", 'String'>
    readonly earnings: FieldRef<"CreatorProfile", 'Float'>
    readonly followers: FieldRef<"CreatorProfile", 'Int'>
    readonly avatar: FieldRef<"CreatorProfile", 'String'>
    readonly location: FieldRef<"CreatorProfile", 'String'>
    readonly payout_network: FieldRef<"CreatorProfile", 'String'>
    readonly createdAt: FieldRef<"CreatorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CreatorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreatorProfile findUnique
   */
  export type CreatorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile findUniqueOrThrow
   */
  export type CreatorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile findFirst
   */
  export type CreatorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatorProfiles.
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatorProfiles.
     */
    distinct?: CreatorProfileScalarFieldEnum | CreatorProfileScalarFieldEnum[]
  }

  /**
   * CreatorProfile findFirstOrThrow
   */
  export type CreatorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatorProfiles.
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatorProfiles.
     */
    distinct?: CreatorProfileScalarFieldEnum | CreatorProfileScalarFieldEnum[]
  }

  /**
   * CreatorProfile findMany
   */
  export type CreatorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreatorProfiles to fetch.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreatorProfiles.
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatorProfiles.
     */
    distinct?: CreatorProfileScalarFieldEnum | CreatorProfileScalarFieldEnum[]
  }

  /**
   * CreatorProfile create
   */
  export type CreatorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CreatorProfile.
     */
    data: XOR<CreatorProfileCreateInput, CreatorProfileUncheckedCreateInput>
  }

  /**
   * CreatorProfile createMany
   */
  export type CreatorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreatorProfiles.
     */
    data: CreatorProfileCreateManyInput | CreatorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreatorProfile createManyAndReturn
   */
  export type CreatorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CreatorProfiles.
     */
    data: CreatorProfileCreateManyInput | CreatorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreatorProfile update
   */
  export type CreatorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CreatorProfile.
     */
    data: XOR<CreatorProfileUpdateInput, CreatorProfileUncheckedUpdateInput>
    /**
     * Choose, which CreatorProfile to update.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile updateMany
   */
  export type CreatorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreatorProfiles.
     */
    data: XOR<CreatorProfileUpdateManyMutationInput, CreatorProfileUncheckedUpdateManyInput>
    /**
     * Filter which CreatorProfiles to update
     */
    where?: CreatorProfileWhereInput
    /**
     * Limit how many CreatorProfiles to update.
     */
    limit?: number
  }

  /**
   * CreatorProfile updateManyAndReturn
   */
  export type CreatorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * The data used to update CreatorProfiles.
     */
    data: XOR<CreatorProfileUpdateManyMutationInput, CreatorProfileUncheckedUpdateManyInput>
    /**
     * Filter which CreatorProfiles to update
     */
    where?: CreatorProfileWhereInput
    /**
     * Limit how many CreatorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreatorProfile upsert
   */
  export type CreatorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CreatorProfile to update in case it exists.
     */
    where: CreatorProfileWhereUniqueInput
    /**
     * In case the CreatorProfile found by the `where` argument doesn't exist, create a new CreatorProfile with this data.
     */
    create: XOR<CreatorProfileCreateInput, CreatorProfileUncheckedCreateInput>
    /**
     * In case the CreatorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreatorProfileUpdateInput, CreatorProfileUncheckedUpdateInput>
  }

  /**
   * CreatorProfile delete
   */
  export type CreatorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter which CreatorProfile to delete.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile deleteMany
   */
  export type CreatorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreatorProfiles to delete
     */
    where?: CreatorProfileWhereInput
    /**
     * Limit how many CreatorProfiles to delete.
     */
    limit?: number
  }

  /**
   * CreatorProfile.contents
   */
  export type CreatorProfile$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * CreatorProfile without action
   */
  export type CreatorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    price: number | null
  }

  export type ContentSumAggregateOutputType = {
    price: number | null
  }

  export type ContentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    contentUrl: string | null
    thumbnailUrl: string | null
    type: $Enums.ContentType | null
    visibility: $Enums.ContentVisibility | null
    price: number | null
    currency: string | null
<<<<<<< HEAD
    moderationStatus: $Enums.ModerationStatus | null
    rejectionReason: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt: Date | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorProfileId: string | null
  }

  export type ContentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    contentUrl: string | null
    thumbnailUrl: string | null
    type: $Enums.ContentType | null
    visibility: $Enums.ContentVisibility | null
    price: number | null
    currency: string | null
<<<<<<< HEAD
    moderationStatus: $Enums.ModerationStatus | null
    rejectionReason: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt: Date | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorProfileId: string | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    contentUrl: number
    thumbnailUrl: number
    type: number
    visibility: number
    price: number
    currency: number
<<<<<<< HEAD
    moderationStatus: number
    rejectionReason: number
=======
>>>>>>> origin/Aziza_branch
    deletedAt: number
    creatorId: number
    createdAt: number
    updatedAt: number
    creatorProfileId: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    price?: true
  }

  export type ContentSumAggregateInputType = {
    price?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contentUrl?: true
    thumbnailUrl?: true
    type?: true
    visibility?: true
    price?: true
    currency?: true
<<<<<<< HEAD
    moderationStatus?: true
    rejectionReason?: true
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    creatorProfileId?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contentUrl?: true
    thumbnailUrl?: true
    type?: true
    visibility?: true
    price?: true
    currency?: true
<<<<<<< HEAD
    moderationStatus?: true
    rejectionReason?: true
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    creatorProfileId?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contentUrl?: true
    thumbnailUrl?: true
    type?: true
    visibility?: true
    price?: true
    currency?: true
<<<<<<< HEAD
    moderationStatus?: true
    rejectionReason?: true
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    creatorProfileId?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: string
    title: string
    description: string | null
    contentUrl: string
    thumbnailUrl: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price: number | null
    currency: string | null
<<<<<<< HEAD
    moderationStatus: $Enums.ModerationStatus
    rejectionReason: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt: Date | null
    creatorId: string
    createdAt: Date
    updatedAt: Date
    creatorProfileId: string | null
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    contentUrl?: boolean
    thumbnailUrl?: boolean
    type?: boolean
    visibility?: boolean
    price?: boolean
    currency?: boolean
<<<<<<< HEAD
    moderationStatus?: boolean
    rejectionReason?: boolean
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorProfileId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    creatorProfile?: boolean | Content$creatorProfileArgs<ExtArgs>
    premiumPurchases?: boolean | Content$premiumPurchasesArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    contentUrl?: boolean
    thumbnailUrl?: boolean
    type?: boolean
    visibility?: boolean
    price?: boolean
    currency?: boolean
<<<<<<< HEAD
    moderationStatus?: boolean
    rejectionReason?: boolean
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorProfileId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    creatorProfile?: boolean | Content$creatorProfileArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    contentUrl?: boolean
    thumbnailUrl?: boolean
    type?: boolean
    visibility?: boolean
    price?: boolean
    currency?: boolean
<<<<<<< HEAD
    moderationStatus?: boolean
    rejectionReason?: boolean
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorProfileId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    creatorProfile?: boolean | Content$creatorProfileArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    contentUrl?: boolean
    thumbnailUrl?: boolean
    type?: boolean
    visibility?: boolean
    price?: boolean
    currency?: boolean
<<<<<<< HEAD
    moderationStatus?: boolean
    rejectionReason?: boolean
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorProfileId?: boolean
  }

<<<<<<< HEAD
  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "contentUrl" | "thumbnailUrl" | "type" | "visibility" | "price" | "currency" | "moderationStatus" | "rejectionReason" | "deletedAt" | "creatorId" | "createdAt" | "updatedAt" | "creatorProfileId", ExtArgs["result"]["content"]>
=======
  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "contentUrl" | "thumbnailUrl" | "type" | "visibility" | "price" | "currency" | "deletedAt" | "creatorId" | "createdAt" | "updatedAt" | "creatorProfileId", ExtArgs["result"]["content"]>
>>>>>>> origin/Aziza_branch
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    creatorProfile?: boolean | Content$creatorProfileArgs<ExtArgs>
    premiumPurchases?: boolean | Content$premiumPurchasesArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    creatorProfile?: boolean | Content$creatorProfileArgs<ExtArgs>
  }
  export type ContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    creatorProfile?: boolean | Content$creatorProfileArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      creatorProfile: Prisma.$CreatorProfilePayload<ExtArgs> | null
      premiumPurchases: Prisma.$PremiumPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      contentUrl: string
      thumbnailUrl: string | null
      type: $Enums.ContentType
      visibility: $Enums.ContentVisibility
      price: number | null
      currency: string | null
<<<<<<< HEAD
      moderationStatus: $Enums.ModerationStatus
      rejectionReason: string | null
=======
>>>>>>> origin/Aziza_branch
      deletedAt: Date | null
      creatorId: string
      createdAt: Date
      updatedAt: Date
      creatorProfileId: string | null
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contents and returns the data saved in the database.
     * @param {ContentCreateManyAndReturnArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents and returns the data updated in the database.
     * @param {ContentUpdateManyAndReturnArgs} args - Arguments to update many Contents.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creatorProfile<T extends Content$creatorProfileArgs<ExtArgs> = {}>(args?: Subset<T, Content$creatorProfileArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    premiumPurchases<T extends Content$premiumPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, Content$premiumPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'String'>
    readonly title: FieldRef<"Content", 'String'>
    readonly description: FieldRef<"Content", 'String'>
    readonly contentUrl: FieldRef<"Content", 'String'>
    readonly thumbnailUrl: FieldRef<"Content", 'String'>
    readonly type: FieldRef<"Content", 'ContentType'>
    readonly visibility: FieldRef<"Content", 'ContentVisibility'>
    readonly price: FieldRef<"Content", 'Float'>
    readonly currency: FieldRef<"Content", 'String'>
<<<<<<< HEAD
    readonly moderationStatus: FieldRef<"Content", 'ModerationStatus'>
    readonly rejectionReason: FieldRef<"Content", 'String'>
=======
>>>>>>> origin/Aziza_branch
    readonly deletedAt: FieldRef<"Content", 'DateTime'>
    readonly creatorId: FieldRef<"Content", 'String'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
    readonly creatorProfileId: FieldRef<"Content", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content createManyAndReturn
   */
  export type ContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content updateManyAndReturn
   */
  export type ContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content.creatorProfile
   */
  export type Content$creatorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    where?: CreatorProfileWhereInput
  }

  /**
   * Content.premiumPurchases
   */
  export type Content$premiumPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    where?: PremiumPurchaseWhereInput
    orderBy?: PremiumPurchaseOrderByWithRelationInput | PremiumPurchaseOrderByWithRelationInput[]
    cursor?: PremiumPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PremiumPurchaseScalarFieldEnum | PremiumPurchaseScalarFieldEnum[]
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    budget: number | null
    min_audience_size: number | null
    max_creators: number | null
  }

  export type CampaignSumAggregateOutputType = {
    budget: number | null
    min_audience_size: number | null
    max_creators: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    title: string | null
    description: string | null
    budget: number | null
    status: $Enums.CampaignStatus | null
    niche_filter: string | null
    min_audience_size: number | null
    max_creators: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    title: string | null
    description: string | null
    budget: number | null
    status: $Enums.CampaignStatus | null
    niche_filter: string | null
    min_audience_size: number | null
    max_creators: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    businessId: number
    title: number
    description: number
    budget: number
    status: number
    niche_filter: number
    min_audience_size: number
    max_creators: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    budget?: true
    min_audience_size?: true
    max_creators?: true
  }

  export type CampaignSumAggregateInputType = {
    budget?: true
    min_audience_size?: true
    max_creators?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    businessId?: true
    title?: true
    description?: true
    budget?: true
    status?: true
    niche_filter?: true
    min_audience_size?: true
    max_creators?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    businessId?: true
    title?: true
    description?: true
    budget?: true
    status?: true
    niche_filter?: true
    min_audience_size?: true
    max_creators?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    businessId?: true
    title?: true
    description?: true
    budget?: true
    status?: true
    niche_filter?: true
    min_audience_size?: true
    max_creators?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    businessId: string
    title: string
    description: string | null
    budget: number
    status: $Enums.CampaignStatus
    niche_filter: string
    min_audience_size: number
    max_creators: number
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    status?: boolean
    niche_filter?: boolean
    min_audience_size?: boolean
    max_creators?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | UserDefaultArgs<ExtArgs>
    applications?: boolean | Campaign$applicationsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    status?: boolean
    niche_filter?: boolean
    min_audience_size?: boolean
    max_creators?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    status?: boolean
    niche_filter?: boolean
    min_audience_size?: boolean
    max_creators?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    businessId?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    status?: boolean
    niche_filter?: boolean
    min_audience_size?: boolean
    max_creators?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "title" | "description" | "budget" | "status" | "niche_filter" | "min_audience_size" | "max_creators" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | UserDefaultArgs<ExtArgs>
    applications?: boolean | Campaign$applicationsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      business: Prisma.$UserPayload<ExtArgs>
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      title: string
      description: string | null
      budget: number
      status: $Enums.CampaignStatus
      niche_filter: string
      min_audience_size: number
      max_creators: number
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends Campaign$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly businessId: FieldRef<"Campaign", 'String'>
    readonly title: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly budget: FieldRef<"Campaign", 'Int'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly niche_filter: FieldRef<"Campaign", 'String'>
    readonly min_audience_size: FieldRef<"Campaign", 'Int'>
    readonly max_creators: FieldRef<"Campaign", 'Int'>
    readonly startDate: FieldRef<"Campaign", 'DateTime'>
    readonly endDate: FieldRef<"Campaign", 'DateTime'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.applications
   */
  export type Campaign$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    creatorId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    creatorId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    campaignId: number
    creatorId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    campaignId?: true
    creatorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    campaignId?: true
    creatorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    campaignId?: true
    creatorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    campaignId: string
    creatorId: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    creatorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    creatorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    creatorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    campaignId?: boolean
    creatorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "creatorId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      creatorId: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly campaignId: FieldRef<"Application", 'String'>
    readonly creatorId: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model PaymentTransaction
   */

  export type AggregatePaymentTransaction = {
    _count: PaymentTransactionCountAggregateOutputType | null
    _avg: PaymentTransactionAvgAggregateOutputType | null
    _sum: PaymentTransactionSumAggregateOutputType | null
    _min: PaymentTransactionMinAggregateOutputType | null
    _max: PaymentTransactionMaxAggregateOutputType | null
  }

  export type PaymentTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    paymentType: $Enums.PaymentType | null
    paymentStatus: $Enums.PaymentStatus | null
    transactionRef: string | null
    providerRef: string | null
    idempotencyKey: string | null
    campaignId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    paymentType: $Enums.PaymentType | null
    paymentStatus: $Enums.PaymentStatus | null
    transactionRef: string | null
    providerRef: string | null
    idempotencyKey: string | null
    campaignId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentTransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    paymentType: number
    paymentStatus: number
    transactionRef: number
    providerRef: number
    idempotencyKey: number
    campaignId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentTransactionSumAggregateInputType = {
    amount?: true
  }

  export type PaymentTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentType?: true
    paymentStatus?: true
    transactionRef?: true
    providerRef?: true
    idempotencyKey?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentType?: true
    paymentStatus?: true
    transactionRef?: true
    providerRef?: true
    idempotencyKey?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentType?: true
    paymentStatus?: true
    transactionRef?: true
    providerRef?: true
    idempotencyKey?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTransaction to aggregate.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentTransactions
    **/
    _count?: true | PaymentTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentTransactionMaxAggregateInputType
  }

  export type GetPaymentTransactionAggregateType<T extends PaymentTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentTransaction[P]>
      : GetScalarType<T[P], AggregatePaymentTransaction[P]>
  }




  export type PaymentTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransactionWhereInput
    orderBy?: PaymentTransactionOrderByWithAggregationInput | PaymentTransactionOrderByWithAggregationInput[]
    by: PaymentTransactionScalarFieldEnum[] | PaymentTransactionScalarFieldEnum
    having?: PaymentTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentTransactionCountAggregateInputType | true
    _avg?: PaymentTransactionAvgAggregateInputType
    _sum?: PaymentTransactionSumAggregateInputType
    _min?: PaymentTransactionMinAggregateInputType
    _max?: PaymentTransactionMaxAggregateInputType
  }

  export type PaymentTransactionGroupByOutputType = {
    id: string
    userId: string
    amount: number
    paymentType: $Enums.PaymentType
    paymentStatus: $Enums.PaymentStatus
    transactionRef: string
    providerRef: string | null
    idempotencyKey: string | null
    campaignId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentTransactionCountAggregateOutputType | null
    _avg: PaymentTransactionAvgAggregateOutputType | null
    _sum: PaymentTransactionSumAggregateOutputType | null
    _min: PaymentTransactionMinAggregateOutputType | null
    _max: PaymentTransactionMaxAggregateOutputType | null
  }

  type GetPaymentTransactionGroupByPayload<T extends PaymentTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentTransactionGroupByOutputType[P]>
        }
      >
    >


  export type PaymentTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentType?: boolean
    paymentStatus?: boolean
    transactionRef?: boolean
    providerRef?: boolean
    idempotencyKey?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentType?: boolean
    paymentStatus?: boolean
    transactionRef?: boolean
    providerRef?: boolean
    idempotencyKey?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentType?: boolean
    paymentStatus?: boolean
    transactionRef?: boolean
    providerRef?: boolean
    idempotencyKey?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentType?: boolean
    paymentStatus?: boolean
    transactionRef?: boolean
    providerRef?: boolean
    idempotencyKey?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "paymentType" | "paymentStatus" | "transactionRef" | "providerRef" | "idempotencyKey" | "campaignId" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentTransaction"]>
  export type PaymentTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      paymentType: $Enums.PaymentType
      paymentStatus: $Enums.PaymentStatus
      transactionRef: string
      providerRef: string | null
      idempotencyKey: string | null
      campaignId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentTransaction"]>
    composites: {}
  }

  type PaymentTransactionGetPayload<S extends boolean | null | undefined | PaymentTransactionDefaultArgs> = $Result.GetResult<Prisma.$PaymentTransactionPayload, S>

  type PaymentTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentTransactionCountAggregateInputType | true
    }

  export interface PaymentTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentTransaction'], meta: { name: 'PaymentTransaction' } }
    /**
     * Find zero or one PaymentTransaction that matches the filter.
     * @param {PaymentTransactionFindUniqueArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentTransactionFindUniqueArgs>(args: SelectSubset<T, PaymentTransactionFindUniqueArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentTransactionFindUniqueOrThrowArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindFirstArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentTransactionFindFirstArgs>(args?: SelectSubset<T, PaymentTransactionFindFirstArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindFirstOrThrowArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentTransactions
     * const paymentTransactions = await prisma.paymentTransaction.findMany()
     * 
     * // Get first 10 PaymentTransactions
     * const paymentTransactions = await prisma.paymentTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentTransactionFindManyArgs>(args?: SelectSubset<T, PaymentTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentTransaction.
     * @param {PaymentTransactionCreateArgs} args - Arguments to create a PaymentTransaction.
     * @example
     * // Create one PaymentTransaction
     * const PaymentTransaction = await prisma.paymentTransaction.create({
     *   data: {
     *     // ... data to create a PaymentTransaction
     *   }
     * })
     * 
     */
    create<T extends PaymentTransactionCreateArgs>(args: SelectSubset<T, PaymentTransactionCreateArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentTransactions.
     * @param {PaymentTransactionCreateManyArgs} args - Arguments to create many PaymentTransactions.
     * @example
     * // Create many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentTransactionCreateManyArgs>(args?: SelectSubset<T, PaymentTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentTransactions and returns the data saved in the database.
     * @param {PaymentTransactionCreateManyAndReturnArgs} args - Arguments to create many PaymentTransactions.
     * @example
     * // Create many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentTransactions and only return the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentTransaction.
     * @param {PaymentTransactionDeleteArgs} args - Arguments to delete one PaymentTransaction.
     * @example
     * // Delete one PaymentTransaction
     * const PaymentTransaction = await prisma.paymentTransaction.delete({
     *   where: {
     *     // ... filter to delete one PaymentTransaction
     *   }
     * })
     * 
     */
    delete<T extends PaymentTransactionDeleteArgs>(args: SelectSubset<T, PaymentTransactionDeleteArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentTransaction.
     * @param {PaymentTransactionUpdateArgs} args - Arguments to update one PaymentTransaction.
     * @example
     * // Update one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentTransactionUpdateArgs>(args: SelectSubset<T, PaymentTransactionUpdateArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentTransactions.
     * @param {PaymentTransactionDeleteManyArgs} args - Arguments to filter PaymentTransactions to delete.
     * @example
     * // Delete a few PaymentTransactions
     * const { count } = await prisma.paymentTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentTransactionDeleteManyArgs>(args?: SelectSubset<T, PaymentTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentTransactionUpdateManyArgs>(args: SelectSubset<T, PaymentTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTransactions and returns the data updated in the database.
     * @param {PaymentTransactionUpdateManyAndReturnArgs} args - Arguments to update many PaymentTransactions.
     * @example
     * // Update many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentTransactions and only return the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentTransaction.
     * @param {PaymentTransactionUpsertArgs} args - Arguments to update or create a PaymentTransaction.
     * @example
     * // Update or create a PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.upsert({
     *   create: {
     *     // ... data to create a PaymentTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PaymentTransactionUpsertArgs>(args: SelectSubset<T, PaymentTransactionUpsertArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionCountArgs} args - Arguments to filter PaymentTransactions to count.
     * @example
     * // Count the number of PaymentTransactions
     * const count = await prisma.paymentTransaction.count({
     *   where: {
     *     // ... the filter for the PaymentTransactions we want to count
     *   }
     * })
    **/
    count<T extends PaymentTransactionCountArgs>(
      args?: Subset<T, PaymentTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentTransactionAggregateArgs>(args: Subset<T, PaymentTransactionAggregateArgs>): Prisma.PrismaPromise<GetPaymentTransactionAggregateType<T>>

    /**
     * Group by PaymentTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PaymentTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentTransaction model
   */
  readonly fields: PaymentTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentTransaction model
   */
  interface PaymentTransactionFieldRefs {
    readonly id: FieldRef<"PaymentTransaction", 'String'>
    readonly userId: FieldRef<"PaymentTransaction", 'String'>
    readonly amount: FieldRef<"PaymentTransaction", 'Float'>
    readonly paymentType: FieldRef<"PaymentTransaction", 'PaymentType'>
    readonly paymentStatus: FieldRef<"PaymentTransaction", 'PaymentStatus'>
    readonly transactionRef: FieldRef<"PaymentTransaction", 'String'>
    readonly providerRef: FieldRef<"PaymentTransaction", 'String'>
    readonly idempotencyKey: FieldRef<"PaymentTransaction", 'String'>
    readonly campaignId: FieldRef<"PaymentTransaction", 'String'>
    readonly createdAt: FieldRef<"PaymentTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentTransaction findUnique
   */
  export type PaymentTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction findUniqueOrThrow
   */
  export type PaymentTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction findFirst
   */
  export type PaymentTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransactions.
     */
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction findFirstOrThrow
   */
  export type PaymentTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransactions.
     */
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction findMany
   */
  export type PaymentTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransactions to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransactions.
     */
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction create
   */
  export type PaymentTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentTransaction.
     */
    data: XOR<PaymentTransactionCreateInput, PaymentTransactionUncheckedCreateInput>
  }

  /**
   * PaymentTransaction createMany
   */
  export type PaymentTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentTransactions.
     */
    data: PaymentTransactionCreateManyInput | PaymentTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentTransaction createManyAndReturn
   */
  export type PaymentTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentTransactions.
     */
    data: PaymentTransactionCreateManyInput | PaymentTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTransaction update
   */
  export type PaymentTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentTransaction.
     */
    data: XOR<PaymentTransactionUpdateInput, PaymentTransactionUncheckedUpdateInput>
    /**
     * Choose, which PaymentTransaction to update.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction updateMany
   */
  export type PaymentTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentTransactions.
     */
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTransactions to update
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to update.
     */
    limit?: number
  }

  /**
   * PaymentTransaction updateManyAndReturn
   */
  export type PaymentTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * The data used to update PaymentTransactions.
     */
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTransactions to update
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTransaction upsert
   */
  export type PaymentTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentTransaction to update in case it exists.
     */
    where: PaymentTransactionWhereUniqueInput
    /**
     * In case the PaymentTransaction found by the `where` argument doesn't exist, create a new PaymentTransaction with this data.
     */
    create: XOR<PaymentTransactionCreateInput, PaymentTransactionUncheckedCreateInput>
    /**
     * In case the PaymentTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentTransactionUpdateInput, PaymentTransactionUncheckedUpdateInput>
  }

  /**
   * PaymentTransaction delete
   */
  export type PaymentTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter which PaymentTransaction to delete.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction deleteMany
   */
  export type PaymentTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTransactions to delete
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to delete.
     */
    limit?: number
  }

  /**
   * PaymentTransaction without action
   */
  export type PaymentTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    conversationId: string | null
    message: string | null
    isRead: boolean | null
    readAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    conversationId: string | null
    message: string | null
    isRead: boolean | null
    readAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    conversationId: number
    message: number
    isRead: number
    readAt: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    conversationId?: true
    message?: true
    isRead?: true
    readAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    conversationId?: true
    message?: true
    isRead?: true
    readAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    conversationId?: true
    message?: true
    isRead?: true
    readAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    conversationId: string
    message: string
    isRead: boolean
    readAt: Date | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    conversationId?: boolean
    message?: boolean
    isRead?: boolean
    readAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    conversationId?: boolean
    message?: boolean
    isRead?: boolean
    readAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    conversationId?: boolean
    message?: boolean
    isRead?: boolean
    readAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    conversationId?: boolean
    message?: boolean
    isRead?: boolean
    readAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "conversationId" | "message" | "isRead" | "readAt" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      conversationId: string
      message: string
      isRead: boolean
      readAt: Date | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
    readonly message: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly readAt: FieldRef<"Message", 'DateTime'>
    readonly deletedAt: FieldRef<"Message", 'DateTime'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model PremiumPurchase
   */

  export type AggregatePremiumPurchase = {
    _count: PremiumPurchaseCountAggregateOutputType | null
    _min: PremiumPurchaseMinAggregateOutputType | null
    _max: PremiumPurchaseMaxAggregateOutputType | null
  }

  export type PremiumPurchaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PremiumPurchaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PremiumPurchaseCountAggregateOutputType = {
    id: number
    userId: number
    contentId: number
    status: number
    createdAt: number
    _all: number
  }


  export type PremiumPurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    status?: true
    createdAt?: true
  }

  export type PremiumPurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    status?: true
    createdAt?: true
  }

  export type PremiumPurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PremiumPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremiumPurchase to aggregate.
     */
    where?: PremiumPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumPurchases to fetch.
     */
    orderBy?: PremiumPurchaseOrderByWithRelationInput | PremiumPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PremiumPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PremiumPurchases
    **/
    _count?: true | PremiumPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PremiumPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PremiumPurchaseMaxAggregateInputType
  }

  export type GetPremiumPurchaseAggregateType<T extends PremiumPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePremiumPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePremiumPurchase[P]>
      : GetScalarType<T[P], AggregatePremiumPurchase[P]>
  }




  export type PremiumPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremiumPurchaseWhereInput
    orderBy?: PremiumPurchaseOrderByWithAggregationInput | PremiumPurchaseOrderByWithAggregationInput[]
    by: PremiumPurchaseScalarFieldEnum[] | PremiumPurchaseScalarFieldEnum
    having?: PremiumPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PremiumPurchaseCountAggregateInputType | true
    _min?: PremiumPurchaseMinAggregateInputType
    _max?: PremiumPurchaseMaxAggregateInputType
  }

  export type PremiumPurchaseGroupByOutputType = {
    id: string
    userId: string
    contentId: string
    status: string
    createdAt: Date
    _count: PremiumPurchaseCountAggregateOutputType | null
    _min: PremiumPurchaseMinAggregateOutputType | null
    _max: PremiumPurchaseMaxAggregateOutputType | null
  }

  type GetPremiumPurchaseGroupByPayload<T extends PremiumPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PremiumPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PremiumPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PremiumPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PremiumPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PremiumPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premiumPurchase"]>

  export type PremiumPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premiumPurchase"]>

  export type PremiumPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premiumPurchase"]>

  export type PremiumPurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    contentId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PremiumPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contentId" | "status" | "createdAt", ExtArgs["result"]["premiumPurchase"]>
  export type PremiumPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type PremiumPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type PremiumPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $PremiumPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PremiumPurchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contentId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["premiumPurchase"]>
    composites: {}
  }

  type PremiumPurchaseGetPayload<S extends boolean | null | undefined | PremiumPurchaseDefaultArgs> = $Result.GetResult<Prisma.$PremiumPurchasePayload, S>

  type PremiumPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PremiumPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PremiumPurchaseCountAggregateInputType | true
    }

  export interface PremiumPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PremiumPurchase'], meta: { name: 'PremiumPurchase' } }
    /**
     * Find zero or one PremiumPurchase that matches the filter.
     * @param {PremiumPurchaseFindUniqueArgs} args - Arguments to find a PremiumPurchase
     * @example
     * // Get one PremiumPurchase
     * const premiumPurchase = await prisma.premiumPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PremiumPurchaseFindUniqueArgs>(args: SelectSubset<T, PremiumPurchaseFindUniqueArgs<ExtArgs>>): Prisma__PremiumPurchaseClient<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PremiumPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PremiumPurchaseFindUniqueOrThrowArgs} args - Arguments to find a PremiumPurchase
     * @example
     * // Get one PremiumPurchase
     * const premiumPurchase = await prisma.premiumPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PremiumPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PremiumPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PremiumPurchaseClient<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremiumPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumPurchaseFindFirstArgs} args - Arguments to find a PremiumPurchase
     * @example
     * // Get one PremiumPurchase
     * const premiumPurchase = await prisma.premiumPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PremiumPurchaseFindFirstArgs>(args?: SelectSubset<T, PremiumPurchaseFindFirstArgs<ExtArgs>>): Prisma__PremiumPurchaseClient<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremiumPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumPurchaseFindFirstOrThrowArgs} args - Arguments to find a PremiumPurchase
     * @example
     * // Get one PremiumPurchase
     * const premiumPurchase = await prisma.premiumPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PremiumPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PremiumPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PremiumPurchaseClient<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PremiumPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PremiumPurchases
     * const premiumPurchases = await prisma.premiumPurchase.findMany()
     * 
     * // Get first 10 PremiumPurchases
     * const premiumPurchases = await prisma.premiumPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const premiumPurchaseWithIdOnly = await prisma.premiumPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PremiumPurchaseFindManyArgs>(args?: SelectSubset<T, PremiumPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PremiumPurchase.
     * @param {PremiumPurchaseCreateArgs} args - Arguments to create a PremiumPurchase.
     * @example
     * // Create one PremiumPurchase
     * const PremiumPurchase = await prisma.premiumPurchase.create({
     *   data: {
     *     // ... data to create a PremiumPurchase
     *   }
     * })
     * 
     */
    create<T extends PremiumPurchaseCreateArgs>(args: SelectSubset<T, PremiumPurchaseCreateArgs<ExtArgs>>): Prisma__PremiumPurchaseClient<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PremiumPurchases.
     * @param {PremiumPurchaseCreateManyArgs} args - Arguments to create many PremiumPurchases.
     * @example
     * // Create many PremiumPurchases
     * const premiumPurchase = await prisma.premiumPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PremiumPurchaseCreateManyArgs>(args?: SelectSubset<T, PremiumPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PremiumPurchases and returns the data saved in the database.
     * @param {PremiumPurchaseCreateManyAndReturnArgs} args - Arguments to create many PremiumPurchases.
     * @example
     * // Create many PremiumPurchases
     * const premiumPurchase = await prisma.premiumPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PremiumPurchases and only return the `id`
     * const premiumPurchaseWithIdOnly = await prisma.premiumPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PremiumPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PremiumPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PremiumPurchase.
     * @param {PremiumPurchaseDeleteArgs} args - Arguments to delete one PremiumPurchase.
     * @example
     * // Delete one PremiumPurchase
     * const PremiumPurchase = await prisma.premiumPurchase.delete({
     *   where: {
     *     // ... filter to delete one PremiumPurchase
     *   }
     * })
     * 
     */
    delete<T extends PremiumPurchaseDeleteArgs>(args: SelectSubset<T, PremiumPurchaseDeleteArgs<ExtArgs>>): Prisma__PremiumPurchaseClient<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PremiumPurchase.
     * @param {PremiumPurchaseUpdateArgs} args - Arguments to update one PremiumPurchase.
     * @example
     * // Update one PremiumPurchase
     * const premiumPurchase = await prisma.premiumPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PremiumPurchaseUpdateArgs>(args: SelectSubset<T, PremiumPurchaseUpdateArgs<ExtArgs>>): Prisma__PremiumPurchaseClient<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PremiumPurchases.
     * @param {PremiumPurchaseDeleteManyArgs} args - Arguments to filter PremiumPurchases to delete.
     * @example
     * // Delete a few PremiumPurchases
     * const { count } = await prisma.premiumPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PremiumPurchaseDeleteManyArgs>(args?: SelectSubset<T, PremiumPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremiumPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PremiumPurchases
     * const premiumPurchase = await prisma.premiumPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PremiumPurchaseUpdateManyArgs>(args: SelectSubset<T, PremiumPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremiumPurchases and returns the data updated in the database.
     * @param {PremiumPurchaseUpdateManyAndReturnArgs} args - Arguments to update many PremiumPurchases.
     * @example
     * // Update many PremiumPurchases
     * const premiumPurchase = await prisma.premiumPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PremiumPurchases and only return the `id`
     * const premiumPurchaseWithIdOnly = await prisma.premiumPurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PremiumPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PremiumPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PremiumPurchase.
     * @param {PremiumPurchaseUpsertArgs} args - Arguments to update or create a PremiumPurchase.
     * @example
     * // Update or create a PremiumPurchase
     * const premiumPurchase = await prisma.premiumPurchase.upsert({
     *   create: {
     *     // ... data to create a PremiumPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PremiumPurchase we want to update
     *   }
     * })
     */
    upsert<T extends PremiumPurchaseUpsertArgs>(args: SelectSubset<T, PremiumPurchaseUpsertArgs<ExtArgs>>): Prisma__PremiumPurchaseClient<$Result.GetResult<Prisma.$PremiumPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PremiumPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumPurchaseCountArgs} args - Arguments to filter PremiumPurchases to count.
     * @example
     * // Count the number of PremiumPurchases
     * const count = await prisma.premiumPurchase.count({
     *   where: {
     *     // ... the filter for the PremiumPurchases we want to count
     *   }
     * })
    **/
    count<T extends PremiumPurchaseCountArgs>(
      args?: Subset<T, PremiumPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PremiumPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PremiumPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PremiumPurchaseAggregateArgs>(args: Subset<T, PremiumPurchaseAggregateArgs>): Prisma.PrismaPromise<GetPremiumPurchaseAggregateType<T>>

    /**
     * Group by PremiumPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumPurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PremiumPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PremiumPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PremiumPurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PremiumPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPremiumPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PremiumPurchase model
   */
  readonly fields: PremiumPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PremiumPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PremiumPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PremiumPurchase model
   */
  interface PremiumPurchaseFieldRefs {
    readonly id: FieldRef<"PremiumPurchase", 'String'>
    readonly userId: FieldRef<"PremiumPurchase", 'String'>
    readonly contentId: FieldRef<"PremiumPurchase", 'String'>
    readonly status: FieldRef<"PremiumPurchase", 'String'>
    readonly createdAt: FieldRef<"PremiumPurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PremiumPurchase findUnique
   */
  export type PremiumPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which PremiumPurchase to fetch.
     */
    where: PremiumPurchaseWhereUniqueInput
  }

  /**
   * PremiumPurchase findUniqueOrThrow
   */
  export type PremiumPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which PremiumPurchase to fetch.
     */
    where: PremiumPurchaseWhereUniqueInput
  }

  /**
   * PremiumPurchase findFirst
   */
  export type PremiumPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which PremiumPurchase to fetch.
     */
    where?: PremiumPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumPurchases to fetch.
     */
    orderBy?: PremiumPurchaseOrderByWithRelationInput | PremiumPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremiumPurchases.
     */
    cursor?: PremiumPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremiumPurchases.
     */
    distinct?: PremiumPurchaseScalarFieldEnum | PremiumPurchaseScalarFieldEnum[]
  }

  /**
   * PremiumPurchase findFirstOrThrow
   */
  export type PremiumPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which PremiumPurchase to fetch.
     */
    where?: PremiumPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumPurchases to fetch.
     */
    orderBy?: PremiumPurchaseOrderByWithRelationInput | PremiumPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremiumPurchases.
     */
    cursor?: PremiumPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremiumPurchases.
     */
    distinct?: PremiumPurchaseScalarFieldEnum | PremiumPurchaseScalarFieldEnum[]
  }

  /**
   * PremiumPurchase findMany
   */
  export type PremiumPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which PremiumPurchases to fetch.
     */
    where?: PremiumPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumPurchases to fetch.
     */
    orderBy?: PremiumPurchaseOrderByWithRelationInput | PremiumPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PremiumPurchases.
     */
    cursor?: PremiumPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremiumPurchases.
     */
    distinct?: PremiumPurchaseScalarFieldEnum | PremiumPurchaseScalarFieldEnum[]
  }

  /**
   * PremiumPurchase create
   */
  export type PremiumPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a PremiumPurchase.
     */
    data: XOR<PremiumPurchaseCreateInput, PremiumPurchaseUncheckedCreateInput>
  }

  /**
   * PremiumPurchase createMany
   */
  export type PremiumPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PremiumPurchases.
     */
    data: PremiumPurchaseCreateManyInput | PremiumPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PremiumPurchase createManyAndReturn
   */
  export type PremiumPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many PremiumPurchases.
     */
    data: PremiumPurchaseCreateManyInput | PremiumPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PremiumPurchase update
   */
  export type PremiumPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a PremiumPurchase.
     */
    data: XOR<PremiumPurchaseUpdateInput, PremiumPurchaseUncheckedUpdateInput>
    /**
     * Choose, which PremiumPurchase to update.
     */
    where: PremiumPurchaseWhereUniqueInput
  }

  /**
   * PremiumPurchase updateMany
   */
  export type PremiumPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PremiumPurchases.
     */
    data: XOR<PremiumPurchaseUpdateManyMutationInput, PremiumPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which PremiumPurchases to update
     */
    where?: PremiumPurchaseWhereInput
    /**
     * Limit how many PremiumPurchases to update.
     */
    limit?: number
  }

  /**
   * PremiumPurchase updateManyAndReturn
   */
  export type PremiumPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update PremiumPurchases.
     */
    data: XOR<PremiumPurchaseUpdateManyMutationInput, PremiumPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which PremiumPurchases to update
     */
    where?: PremiumPurchaseWhereInput
    /**
     * Limit how many PremiumPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PremiumPurchase upsert
   */
  export type PremiumPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the PremiumPurchase to update in case it exists.
     */
    where: PremiumPurchaseWhereUniqueInput
    /**
     * In case the PremiumPurchase found by the `where` argument doesn't exist, create a new PremiumPurchase with this data.
     */
    create: XOR<PremiumPurchaseCreateInput, PremiumPurchaseUncheckedCreateInput>
    /**
     * In case the PremiumPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PremiumPurchaseUpdateInput, PremiumPurchaseUncheckedUpdateInput>
  }

  /**
   * PremiumPurchase delete
   */
  export type PremiumPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
    /**
     * Filter which PremiumPurchase to delete.
     */
    where: PremiumPurchaseWhereUniqueInput
  }

  /**
   * PremiumPurchase deleteMany
   */
  export type PremiumPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremiumPurchases to delete
     */
    where?: PremiumPurchaseWhereInput
    /**
     * Limit how many PremiumPurchases to delete.
     */
    limit?: number
  }

  /**
   * PremiumPurchase without action
   */
  export type PremiumPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumPurchase
     */
    select?: PremiumPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumPurchase
     */
    omit?: PremiumPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumPurchaseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    profileImage: 'profileImage',
    role: 'role',
    verificationStatus: 'verificationStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CreatorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    specialization: 'specialization',
    socialLinks: 'socialLinks',
    payout_account: 'payout_account',
    earnings: 'earnings',
    followers: 'followers',
    avatar: 'avatar',
    location: 'location',
    payout_network: 'payout_network',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreatorProfileScalarFieldEnum = (typeof CreatorProfileScalarFieldEnum)[keyof typeof CreatorProfileScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    contentUrl: 'contentUrl',
    thumbnailUrl: 'thumbnailUrl',
    type: 'type',
    visibility: 'visibility',
    price: 'price',
    currency: 'currency',
<<<<<<< HEAD
    moderationStatus: 'moderationStatus',
    rejectionReason: 'rejectionReason',
=======
>>>>>>> origin/Aziza_branch
    deletedAt: 'deletedAt',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorProfileId: 'creatorProfileId'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    title: 'title',
    description: 'description',
    budget: 'budget',
    status: 'status',
    niche_filter: 'niche_filter',
    min_audience_size: 'min_audience_size',
    max_creators: 'max_creators',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    creatorId: 'creatorId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const PaymentTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    paymentType: 'paymentType',
    paymentStatus: 'paymentStatus',
    transactionRef: 'transactionRef',
    providerRef: 'providerRef',
    idempotencyKey: 'idempotencyKey',
    campaignId: 'campaignId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentTransactionScalarFieldEnum = (typeof PaymentTransactionScalarFieldEnum)[keyof typeof PaymentTransactionScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    conversationId: 'conversationId',
    message: 'message',
    isRead: 'isRead',
    readAt: 'readAt',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const PremiumPurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contentId: 'contentId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PremiumPurchaseScalarFieldEnum = (typeof PremiumPurchaseScalarFieldEnum)[keyof typeof PremiumPurchaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ContentType'
<<<<<<< HEAD
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'ContentVisibility'
   */
  export type EnumContentVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentVisibility'>
    


  /**
   * Reference to a field of type 'ContentVisibility[]'
   */
  export type ListEnumContentVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentVisibility[]'>
    


  /**
   * Reference to a field of type 'ModerationStatus'
=======
>>>>>>> origin/Aziza_branch
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
<<<<<<< HEAD
=======
   * Reference to a field of type 'ContentVisibility'
   */
  export type EnumContentVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentVisibility'>
    


  /**
   * Reference to a field of type 'ContentVisibility[]'
   */
  export type ListEnumContentVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentVisibility[]'>
    


  /**
>>>>>>> origin/Aziza_branch
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verificationStatus?: EnumVerificationStatusFilter<"User"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    creatorProfile?: XOR<CreatorProfileNullableScalarRelationFilter, CreatorProfileWhereInput> | null
    contents?: ContentListRelationFilter
    campaigns?: CampaignListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    paymentTransactions?: PaymentTransactionListRelationFilter
    premiumPurchases?: PremiumPurchaseListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorProfile?: CreatorProfileOrderByWithRelationInput
    contents?: ContentOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    paymentTransactions?: PaymentTransactionOrderByRelationAggregateInput
    premiumPurchases?: PremiumPurchaseOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verificationStatus?: EnumVerificationStatusFilter<"User"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    creatorProfile?: XOR<CreatorProfileNullableScalarRelationFilter, CreatorProfileWhereInput> | null
    contents?: ContentListRelationFilter
    campaigns?: CampaignListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    paymentTransactions?: PaymentTransactionListRelationFilter
    premiumPurchases?: PremiumPurchaseListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"User"> | $Enums.VerificationStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CreatorProfileWhereInput = {
    AND?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    OR?: CreatorProfileWhereInput[]
    NOT?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    id?: StringFilter<"CreatorProfile"> | string
    userId?: StringFilter<"CreatorProfile"> | string
    bio?: StringNullableFilter<"CreatorProfile"> | string | null
    specialization?: StringNullableFilter<"CreatorProfile"> | string | null
    socialLinks?: StringNullableFilter<"CreatorProfile"> | string | null
    payout_account?: StringNullableFilter<"CreatorProfile"> | string | null
    earnings?: FloatFilter<"CreatorProfile"> | number
    followers?: IntFilter<"CreatorProfile"> | number
    avatar?: StringNullableFilter<"CreatorProfile"> | string | null
    location?: StringNullableFilter<"CreatorProfile"> | string | null
    payout_network?: StringNullableFilter<"CreatorProfile"> | string | null
    createdAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contents?: ContentListRelationFilter
  }

  export type CreatorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    payout_account?: SortOrderInput | SortOrder
    earnings?: SortOrder
    followers?: SortOrder
    avatar?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    payout_network?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contents?: ContentOrderByRelationAggregateInput
  }

  export type CreatorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    OR?: CreatorProfileWhereInput[]
    NOT?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    bio?: StringNullableFilter<"CreatorProfile"> | string | null
    specialization?: StringNullableFilter<"CreatorProfile"> | string | null
    socialLinks?: StringNullableFilter<"CreatorProfile"> | string | null
    payout_account?: StringNullableFilter<"CreatorProfile"> | string | null
    earnings?: FloatFilter<"CreatorProfile"> | number
    followers?: IntFilter<"CreatorProfile"> | number
    avatar?: StringNullableFilter<"CreatorProfile"> | string | null
    location?: StringNullableFilter<"CreatorProfile"> | string | null
    payout_network?: StringNullableFilter<"CreatorProfile"> | string | null
    createdAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contents?: ContentListRelationFilter
  }, "id" | "userId">

  export type CreatorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    payout_account?: SortOrderInput | SortOrder
    earnings?: SortOrder
    followers?: SortOrder
    avatar?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    payout_network?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreatorProfileCountOrderByAggregateInput
    _avg?: CreatorProfileAvgOrderByAggregateInput
    _max?: CreatorProfileMaxOrderByAggregateInput
    _min?: CreatorProfileMinOrderByAggregateInput
    _sum?: CreatorProfileSumOrderByAggregateInput
  }

  export type CreatorProfileScalarWhereWithAggregatesInput = {
    AND?: CreatorProfileScalarWhereWithAggregatesInput | CreatorProfileScalarWhereWithAggregatesInput[]
    OR?: CreatorProfileScalarWhereWithAggregatesInput[]
    NOT?: CreatorProfileScalarWhereWithAggregatesInput | CreatorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreatorProfile"> | string
    userId?: StringWithAggregatesFilter<"CreatorProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    socialLinks?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    payout_account?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    earnings?: FloatWithAggregatesFilter<"CreatorProfile"> | number
    followers?: IntWithAggregatesFilter<"CreatorProfile"> | number
    avatar?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    location?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    payout_network?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreatorProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreatorProfile"> | Date | string
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    contentUrl?: StringFilter<"Content"> | string
    thumbnailUrl?: StringNullableFilter<"Content"> | string | null
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    visibility?: EnumContentVisibilityFilter<"Content"> | $Enums.ContentVisibility
    price?: FloatNullableFilter<"Content"> | number | null
    currency?: StringNullableFilter<"Content"> | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFilter<"Content"> | $Enums.ModerationStatus
    rejectionReason?: StringNullableFilter<"Content"> | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    creatorId?: StringFilter<"Content"> | string
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    creatorProfileId?: StringNullableFilter<"Content"> | string | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    creatorProfile?: XOR<CreatorProfileNullableScalarRelationFilter, CreatorProfileWhereInput> | null
    premiumPurchases?: PremiumPurchaseListRelationFilter
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    contentUrl?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    type?: SortOrder
    visibility?: SortOrder
    price?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
<<<<<<< HEAD
    moderationStatus?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorProfileId?: SortOrderInput | SortOrder
    creator?: UserOrderByWithRelationInput
    creatorProfile?: CreatorProfileOrderByWithRelationInput
    premiumPurchases?: PremiumPurchaseOrderByRelationAggregateInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    contentUrl?: StringFilter<"Content"> | string
    thumbnailUrl?: StringNullableFilter<"Content"> | string | null
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    visibility?: EnumContentVisibilityFilter<"Content"> | $Enums.ContentVisibility
    price?: FloatNullableFilter<"Content"> | number | null
    currency?: StringNullableFilter<"Content"> | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFilter<"Content"> | $Enums.ModerationStatus
    rejectionReason?: StringNullableFilter<"Content"> | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    creatorId?: StringFilter<"Content"> | string
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    creatorProfileId?: StringNullableFilter<"Content"> | string | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    creatorProfile?: XOR<CreatorProfileNullableScalarRelationFilter, CreatorProfileWhereInput> | null
    premiumPurchases?: PremiumPurchaseListRelationFilter
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    contentUrl?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    type?: SortOrder
    visibility?: SortOrder
    price?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
<<<<<<< HEAD
    moderationStatus?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorProfileId?: SortOrderInput | SortOrder
    _count?: ContentCountOrderByAggregateInput
    _avg?: ContentAvgOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
    _sum?: ContentSumOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Content"> | string
    title?: StringWithAggregatesFilter<"Content"> | string
    description?: StringNullableWithAggregatesFilter<"Content"> | string | null
    contentUrl?: StringWithAggregatesFilter<"Content"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Content"> | string | null
    type?: EnumContentTypeWithAggregatesFilter<"Content"> | $Enums.ContentType
    visibility?: EnumContentVisibilityWithAggregatesFilter<"Content"> | $Enums.ContentVisibility
    price?: FloatNullableWithAggregatesFilter<"Content"> | number | null
    currency?: StringNullableWithAggregatesFilter<"Content"> | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusWithAggregatesFilter<"Content"> | $Enums.ModerationStatus
    rejectionReason?: StringNullableWithAggregatesFilter<"Content"> | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Content"> | Date | string | null
    creatorId?: StringWithAggregatesFilter<"Content"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    creatorProfileId?: StringNullableWithAggregatesFilter<"Content"> | string | null
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    businessId?: StringFilter<"Campaign"> | string
    title?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    budget?: IntFilter<"Campaign"> | number
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    niche_filter?: StringFilter<"Campaign"> | string
    min_audience_size?: IntFilter<"Campaign"> | number
    max_creators?: IntFilter<"Campaign"> | number
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    business?: XOR<UserScalarRelationFilter, UserWhereInput>
    applications?: ApplicationListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    budget?: SortOrder
    status?: SortOrder
    niche_filter?: SortOrder
    min_audience_size?: SortOrder
    max_creators?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: UserOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    businessId?: StringFilter<"Campaign"> | string
    title?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    budget?: IntFilter<"Campaign"> | number
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    niche_filter?: StringFilter<"Campaign"> | string
    min_audience_size?: IntFilter<"Campaign"> | number
    max_creators?: IntFilter<"Campaign"> | number
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    business?: XOR<UserScalarRelationFilter, UserWhereInput>
    applications?: ApplicationListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    budget?: SortOrder
    status?: SortOrder
    niche_filter?: SortOrder
    min_audience_size?: SortOrder
    max_creators?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    businessId?: StringWithAggregatesFilter<"Campaign"> | string
    title?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    budget?: IntWithAggregatesFilter<"Campaign"> | number
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    niche_filter?: StringWithAggregatesFilter<"Campaign"> | string
    min_audience_size?: IntWithAggregatesFilter<"Campaign"> | number
    max_creators?: IntWithAggregatesFilter<"Campaign"> | number
    startDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    campaignId?: StringFilter<"Application"> | string
    creatorId?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    creatorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId_creatorId?: ApplicationCampaignIdCreatorIdCompoundUniqueInput
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    campaignId?: StringFilter<"Application"> | string
    creatorId?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "campaignId_creatorId">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    creatorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    campaignId?: StringWithAggregatesFilter<"Application"> | string
    creatorId?: StringWithAggregatesFilter<"Application"> | string
    status?: StringWithAggregatesFilter<"Application"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type PaymentTransactionWhereInput = {
    AND?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    OR?: PaymentTransactionWhereInput[]
    NOT?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    id?: StringFilter<"PaymentTransaction"> | string
    userId?: StringFilter<"PaymentTransaction"> | string
    amount?: FloatFilter<"PaymentTransaction"> | number
    paymentType?: EnumPaymentTypeFilter<"PaymentTransaction"> | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusFilter<"PaymentTransaction"> | $Enums.PaymentStatus
    transactionRef?: StringFilter<"PaymentTransaction"> | string
    providerRef?: StringNullableFilter<"PaymentTransaction"> | string | null
    idempotencyKey?: StringNullableFilter<"PaymentTransaction"> | string | null
    campaignId?: StringNullableFilter<"PaymentTransaction"> | string | null
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentType?: SortOrder
    paymentStatus?: SortOrder
    transactionRef?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionRef?: string
    idempotencyKey_userId_paymentType?: PaymentTransactionIdempotencyKeyUserIdPaymentTypeCompoundUniqueInput
    AND?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    OR?: PaymentTransactionWhereInput[]
    NOT?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    userId?: StringFilter<"PaymentTransaction"> | string
    amount?: FloatFilter<"PaymentTransaction"> | number
    paymentType?: EnumPaymentTypeFilter<"PaymentTransaction"> | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusFilter<"PaymentTransaction"> | $Enums.PaymentStatus
    providerRef?: StringNullableFilter<"PaymentTransaction"> | string | null
    idempotencyKey?: StringNullableFilter<"PaymentTransaction"> | string | null
    campaignId?: StringNullableFilter<"PaymentTransaction"> | string | null
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "transactionRef" | "idempotencyKey_userId_paymentType">

  export type PaymentTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentType?: SortOrder
    paymentStatus?: SortOrder
    transactionRef?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentTransactionCountOrderByAggregateInput
    _avg?: PaymentTransactionAvgOrderByAggregateInput
    _max?: PaymentTransactionMaxOrderByAggregateInput
    _min?: PaymentTransactionMinOrderByAggregateInput
    _sum?: PaymentTransactionSumOrderByAggregateInput
  }

  export type PaymentTransactionScalarWhereWithAggregatesInput = {
    AND?: PaymentTransactionScalarWhereWithAggregatesInput | PaymentTransactionScalarWhereWithAggregatesInput[]
    OR?: PaymentTransactionScalarWhereWithAggregatesInput[]
    NOT?: PaymentTransactionScalarWhereWithAggregatesInput | PaymentTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    userId?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    amount?: FloatWithAggregatesFilter<"PaymentTransaction"> | number
    paymentType?: EnumPaymentTypeWithAggregatesFilter<"PaymentTransaction"> | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"PaymentTransaction"> | $Enums.PaymentStatus
    transactionRef?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    providerRef?: StringNullableWithAggregatesFilter<"PaymentTransaction"> | string | null
    idempotencyKey?: StringNullableWithAggregatesFilter<"PaymentTransaction"> | string | null
    campaignId?: StringNullableWithAggregatesFilter<"PaymentTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentTransaction"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
    conversationId?: StringWithAggregatesFilter<"Message"> | string
    message?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type PremiumPurchaseWhereInput = {
    AND?: PremiumPurchaseWhereInput | PremiumPurchaseWhereInput[]
    OR?: PremiumPurchaseWhereInput[]
    NOT?: PremiumPurchaseWhereInput | PremiumPurchaseWhereInput[]
    id?: StringFilter<"PremiumPurchase"> | string
    userId?: StringFilter<"PremiumPurchase"> | string
    contentId?: StringFilter<"PremiumPurchase"> | string
    status?: StringFilter<"PremiumPurchase"> | string
    createdAt?: DateTimeFilter<"PremiumPurchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type PremiumPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
  }

  export type PremiumPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PremiumPurchaseWhereInput | PremiumPurchaseWhereInput[]
    OR?: PremiumPurchaseWhereInput[]
    NOT?: PremiumPurchaseWhereInput | PremiumPurchaseWhereInput[]
    userId?: StringFilter<"PremiumPurchase"> | string
    contentId?: StringFilter<"PremiumPurchase"> | string
    status?: StringFilter<"PremiumPurchase"> | string
    createdAt?: DateTimeFilter<"PremiumPurchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id">

  export type PremiumPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PremiumPurchaseCountOrderByAggregateInput
    _max?: PremiumPurchaseMaxOrderByAggregateInput
    _min?: PremiumPurchaseMinOrderByAggregateInput
  }

  export type PremiumPurchaseScalarWhereWithAggregatesInput = {
    AND?: PremiumPurchaseScalarWhereWithAggregatesInput | PremiumPurchaseScalarWhereWithAggregatesInput[]
    OR?: PremiumPurchaseScalarWhereWithAggregatesInput[]
    NOT?: PremiumPurchaseScalarWhereWithAggregatesInput | PremiumPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PremiumPurchase"> | string
    userId?: StringWithAggregatesFilter<"PremiumPurchase"> | string
    contentId?: StringWithAggregatesFilter<"PremiumPurchase"> | string
    status?: StringWithAggregatesFilter<"PremiumPurchase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PremiumPurchase"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileCreateNestedOneWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUpdateOneWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreatorProfileCreateInput = {
    id?: string
    bio?: string | null
    specialization?: string | null
    socialLinks?: string | null
    payout_account?: string | null
    earnings?: number
    followers?: number
    avatar?: string | null
    location?: string | null
    payout_network?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreatorProfileInput
    contents?: ContentCreateNestedManyWithoutCreatorProfileInput
  }

  export type CreatorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    bio?: string | null
    specialization?: string | null
    socialLinks?: string | null
    payout_account?: string | null
    earnings?: number
    followers?: number
    avatar?: string | null
    location?: string | null
    payout_network?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorProfileInput
  }

  export type CreatorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    payout_account?: NullableStringFieldUpdateOperationsInput | string | null
    earnings?: FloatFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    payout_network?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreatorProfileNestedInput
    contents?: ContentUpdateManyWithoutCreatorProfileNestedInput
  }

  export type CreatorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    payout_account?: NullableStringFieldUpdateOperationsInput | string | null
    earnings?: FloatFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    payout_network?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutCreatorProfileNestedInput
  }

  export type CreatorProfileCreateManyInput = {
    id?: string
    userId: string
    bio?: string | null
    specialization?: string | null
    socialLinks?: string | null
    payout_account?: string | null
    earnings?: number
    followers?: number
    avatar?: string | null
    location?: string | null
    payout_network?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreatorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    payout_account?: NullableStringFieldUpdateOperationsInput | string | null
    earnings?: FloatFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    payout_network?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreatorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    payout_account?: NullableStringFieldUpdateOperationsInput | string | null
    earnings?: FloatFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    payout_network?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContentsInput
    creatorProfile?: CreatorProfileCreateNestedOneWithoutContentsInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfileId?: string | null
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContentsNestedInput
    creatorProfile?: CreatorProfileUpdateOneWithoutContentsNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfileId?: string | null
  }

  export type ContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignCreateInput = {
    id?: string
    title: string
    description?: string | null
    budget: number
    status?: $Enums.CampaignStatus
    niche_filter: string
    min_audience_size: number
    max_creators: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    business: UserCreateNestedOneWithoutCampaignsInput
    applications?: ApplicationCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    businessId: string
    title: string
    description?: string | null
    budget: number
    status?: $Enums.CampaignStatus
    niche_filter: string
    min_audience_size: number
    max_creators: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    niche_filter?: StringFieldUpdateOperationsInput | string
    min_audience_size?: IntFieldUpdateOperationsInput | number
    max_creators?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    applications?: ApplicationUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    niche_filter?: StringFieldUpdateOperationsInput | string
    min_audience_size?: IntFieldUpdateOperationsInput | number
    max_creators?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    businessId: string
    title: string
    description?: string | null
    budget: number
    status?: $Enums.CampaignStatus
    niche_filter: string
    min_audience_size: number
    max_creators: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    niche_filter?: StringFieldUpdateOperationsInput | string
    min_audience_size?: IntFieldUpdateOperationsInput | number
    max_creators?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    niche_filter?: StringFieldUpdateOperationsInput | string
    min_audience_size?: IntFieldUpdateOperationsInput | number
    max_creators?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutApplicationsInput
    creator: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    campaignId: string
    creatorId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutApplicationsNestedInput
    creator?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: string
    campaignId: string
    creatorId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionCreateInput = {
    id?: string
    amount: number
    paymentType: $Enums.PaymentType
    paymentStatus?: $Enums.PaymentStatus
    transactionRef: string
    providerRef?: string | null
    idempotencyKey?: string | null
    campaignId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentTransactionsInput
  }

  export type PaymentTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    paymentType: $Enums.PaymentType
    paymentStatus?: $Enums.PaymentStatus
    transactionRef: string
    providerRef?: string | null
    idempotencyKey?: string | null
    campaignId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentTransactionsNestedInput
  }

  export type PaymentTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionCreateManyInput = {
    id?: string
    userId: string
    amount: number
    paymentType: $Enums.PaymentType
    paymentStatus?: $Enums.PaymentStatus
    transactionRef: string
    providerRef?: string | null
    idempotencyKey?: string | null
    campaignId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    conversationId: string
    message: string
    isRead?: boolean
    readAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    conversationId: string
    message: string
    isRead?: boolean
    readAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    conversationId: string
    message: string
    isRead?: boolean
    readAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumPurchaseCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPremiumPurchasesInput
    content: ContentCreateNestedOneWithoutPremiumPurchasesInput
  }

  export type PremiumPurchaseUncheckedCreateInput = {
    id?: string
    userId: string
    contentId: string
    status: string
    createdAt?: Date | string
  }

  export type PremiumPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPremiumPurchasesNestedInput
    content?: ContentUpdateOneRequiredWithoutPremiumPurchasesNestedInput
  }

  export type PremiumPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumPurchaseCreateManyInput = {
    id?: string
    userId: string
    contentId: string
    status: string
    createdAt?: Date | string
  }

  export type PremiumPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CreatorProfileNullableScalarRelationFilter = {
    is?: CreatorProfileWhereInput | null
    isNot?: CreatorProfileWhereInput | null
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type PaymentTransactionListRelationFilter = {
    every?: PaymentTransactionWhereInput
    some?: PaymentTransactionWhereInput
    none?: PaymentTransactionWhereInput
  }

  export type PremiumPurchaseListRelationFilter = {
    every?: PremiumPurchaseWhereInput
    some?: PremiumPurchaseWhereInput
    none?: PremiumPurchaseWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PremiumPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CreatorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    specialization?: SortOrder
    socialLinks?: SortOrder
    payout_account?: SortOrder
    earnings?: SortOrder
    followers?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    payout_network?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreatorProfileAvgOrderByAggregateInput = {
    earnings?: SortOrder
    followers?: SortOrder
  }

  export type CreatorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    specialization?: SortOrder
    socialLinks?: SortOrder
    payout_account?: SortOrder
    earnings?: SortOrder
    followers?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    payout_network?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreatorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    specialization?: SortOrder
    socialLinks?: SortOrder
    payout_account?: SortOrder
    earnings?: SortOrder
    followers?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    payout_network?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreatorProfileSumOrderByAggregateInput = {
    earnings?: SortOrder
    followers?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
<<<<<<< HEAD
  }

  export type EnumContentVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentVisibility | EnumContentVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumContentVisibilityFilter<$PrismaModel> | $Enums.ContentVisibility
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumModerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusFilter<$PrismaModel> | $Enums.ModerationStatus
  }

=======
  }

  export type EnumContentVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentVisibility | EnumContentVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumContentVisibilityFilter<$PrismaModel> | $Enums.ContentVisibility
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

>>>>>>> origin/Aziza_branch
  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentUrl?: SortOrder
    thumbnailUrl?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    price?: SortOrder
    currency?: SortOrder
<<<<<<< HEAD
    moderationStatus?: SortOrder
    rejectionReason?: SortOrder
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorProfileId?: SortOrder
  }

  export type ContentAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentUrl?: SortOrder
    thumbnailUrl?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    price?: SortOrder
    currency?: SortOrder
<<<<<<< HEAD
    moderationStatus?: SortOrder
    rejectionReason?: SortOrder
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorProfileId?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentUrl?: SortOrder
    thumbnailUrl?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    price?: SortOrder
    currency?: SortOrder
<<<<<<< HEAD
    moderationStatus?: SortOrder
    rejectionReason?: SortOrder
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorProfileId?: SortOrder
  }

  export type ContentSumOrderByAggregateInput = {
    price?: SortOrder
<<<<<<< HEAD
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type EnumContentVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentVisibility | EnumContentVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumContentVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.ContentVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentVisibilityFilter<$PrismaModel>
    _max?: NestedEnumContentVisibilityFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumModerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModerationStatusFilter<$PrismaModel>
    _max?: NestedEnumModerationStatusFilter<$PrismaModel>
  }

=======
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type EnumContentVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentVisibility | EnumContentVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumContentVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.ContentVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentVisibilityFilter<$PrismaModel>
    _max?: NestedEnumContentVisibilityFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

>>>>>>> origin/Aziza_branch
  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    status?: SortOrder
    niche_filter?: SortOrder
    min_audience_size?: SortOrder
    max_creators?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    budget?: SortOrder
    min_audience_size?: SortOrder
    max_creators?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    status?: SortOrder
    niche_filter?: SortOrder
    min_audience_size?: SortOrder
    max_creators?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    status?: SortOrder
    niche_filter?: SortOrder
    min_audience_size?: SortOrder
    max_creators?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    budget?: SortOrder
    min_audience_size?: SortOrder
    max_creators?: SortOrder
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type ApplicationCampaignIdCreatorIdCompoundUniqueInput = {
    campaignId: string
    creatorId: string
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    creatorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    creatorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    creatorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentTransactionIdempotencyKeyUserIdPaymentTypeCompoundUniqueInput = {
    idempotencyKey: string
    userId: string
    paymentType: $Enums.PaymentType
  }

  export type PaymentTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentType?: SortOrder
    paymentStatus?: SortOrder
    transactionRef?: SortOrder
    providerRef?: SortOrder
    idempotencyKey?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentType?: SortOrder
    paymentStatus?: SortOrder
    transactionRef?: SortOrder
    providerRef?: SortOrder
    idempotencyKey?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentType?: SortOrder
    paymentStatus?: SortOrder
    transactionRef?: SortOrder
    providerRef?: SortOrder
    idempotencyKey?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContentScalarRelationFilter = {
    is?: ContentWhereInput
    isNot?: ContentWhereInput
  }

  export type PremiumPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PremiumPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PremiumPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CreatorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CreatorProfileCreateWithoutUserInput, CreatorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutUserInput
    connect?: CreatorProfileWhereUniqueInput
  }

  export type ContentCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput> | ContentCreateWithoutCreatorInput[] | ContentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorInput | ContentCreateOrConnectWithoutCreatorInput[]
    createMany?: ContentCreateManyCreatorInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutBusinessInput = {
    create?: XOR<CampaignCreateWithoutBusinessInput, CampaignUncheckedCreateWithoutBusinessInput> | CampaignCreateWithoutBusinessInput[] | CampaignUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutBusinessInput | CampaignCreateOrConnectWithoutBusinessInput[]
    createMany?: CampaignCreateManyBusinessInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PaymentTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
  }

  export type PremiumPurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PremiumPurchaseCreateWithoutUserInput, PremiumPurchaseUncheckedCreateWithoutUserInput> | PremiumPurchaseCreateWithoutUserInput[] | PremiumPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PremiumPurchaseCreateOrConnectWithoutUserInput | PremiumPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PremiumPurchaseCreateManyUserInputEnvelope
    connect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ApplicationCreateWithoutCreatorInput, ApplicationUncheckedCreateWithoutCreatorInput> | ApplicationCreateWithoutCreatorInput[] | ApplicationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCreatorInput | ApplicationCreateOrConnectWithoutCreatorInput[]
    createMany?: ApplicationCreateManyCreatorInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type CreatorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CreatorProfileCreateWithoutUserInput, CreatorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutUserInput
    connect?: CreatorProfileWhereUniqueInput
  }

  export type ContentUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput> | ContentCreateWithoutCreatorInput[] | ContentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorInput | ContentCreateOrConnectWithoutCreatorInput[]
    createMany?: ContentCreateManyCreatorInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<CampaignCreateWithoutBusinessInput, CampaignUncheckedCreateWithoutBusinessInput> | CampaignCreateWithoutBusinessInput[] | CampaignUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutBusinessInput | CampaignCreateOrConnectWithoutBusinessInput[]
    createMany?: CampaignCreateManyBusinessInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PaymentTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
  }

  export type PremiumPurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PremiumPurchaseCreateWithoutUserInput, PremiumPurchaseUncheckedCreateWithoutUserInput> | PremiumPurchaseCreateWithoutUserInput[] | PremiumPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PremiumPurchaseCreateOrConnectWithoutUserInput | PremiumPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PremiumPurchaseCreateManyUserInputEnvelope
    connect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ApplicationCreateWithoutCreatorInput, ApplicationUncheckedCreateWithoutCreatorInput> | ApplicationCreateWithoutCreatorInput[] | ApplicationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCreatorInput | ApplicationCreateOrConnectWithoutCreatorInput[]
    createMany?: ApplicationCreateManyCreatorInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CreatorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreatorProfileCreateWithoutUserInput, CreatorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutUserInput
    upsert?: CreatorProfileUpsertWithoutUserInput
    disconnect?: CreatorProfileWhereInput | boolean
    delete?: CreatorProfileWhereInput | boolean
    connect?: CreatorProfileWhereUniqueInput
    update?: XOR<XOR<CreatorProfileUpdateToOneWithWhereWithoutUserInput, CreatorProfileUpdateWithoutUserInput>, CreatorProfileUncheckedUpdateWithoutUserInput>
  }

  export type ContentUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput> | ContentCreateWithoutCreatorInput[] | ContentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorInput | ContentCreateOrConnectWithoutCreatorInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutCreatorInput | ContentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContentCreateManyCreatorInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutCreatorInput | ContentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutCreatorInput | ContentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<CampaignCreateWithoutBusinessInput, CampaignUncheckedCreateWithoutBusinessInput> | CampaignCreateWithoutBusinessInput[] | CampaignUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutBusinessInput | CampaignCreateOrConnectWithoutBusinessInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutBusinessInput | CampaignUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: CampaignCreateManyBusinessInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutBusinessInput | CampaignUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutBusinessInput | CampaignUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PaymentTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PaymentTransactionUpsertWithWhereUniqueWithoutUserInput | PaymentTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    set?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    disconnect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    delete?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    update?: PaymentTransactionUpdateWithWhereUniqueWithoutUserInput | PaymentTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentTransactionUpdateManyWithWhereWithoutUserInput | PaymentTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
  }

  export type PremiumPurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PremiumPurchaseCreateWithoutUserInput, PremiumPurchaseUncheckedCreateWithoutUserInput> | PremiumPurchaseCreateWithoutUserInput[] | PremiumPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PremiumPurchaseCreateOrConnectWithoutUserInput | PremiumPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PremiumPurchaseUpsertWithWhereUniqueWithoutUserInput | PremiumPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PremiumPurchaseCreateManyUserInputEnvelope
    set?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    disconnect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    delete?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    connect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    update?: PremiumPurchaseUpdateWithWhereUniqueWithoutUserInput | PremiumPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PremiumPurchaseUpdateManyWithWhereWithoutUserInput | PremiumPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PremiumPurchaseScalarWhereInput | PremiumPurchaseScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ApplicationCreateWithoutCreatorInput, ApplicationUncheckedCreateWithoutCreatorInput> | ApplicationCreateWithoutCreatorInput[] | ApplicationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCreatorInput | ApplicationCreateOrConnectWithoutCreatorInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCreatorInput | ApplicationUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ApplicationCreateManyCreatorInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCreatorInput | ApplicationUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCreatorInput | ApplicationUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type CreatorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreatorProfileCreateWithoutUserInput, CreatorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutUserInput
    upsert?: CreatorProfileUpsertWithoutUserInput
    disconnect?: CreatorProfileWhereInput | boolean
    delete?: CreatorProfileWhereInput | boolean
    connect?: CreatorProfileWhereUniqueInput
    update?: XOR<XOR<CreatorProfileUpdateToOneWithWhereWithoutUserInput, CreatorProfileUpdateWithoutUserInput>, CreatorProfileUncheckedUpdateWithoutUserInput>
  }

  export type ContentUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput> | ContentCreateWithoutCreatorInput[] | ContentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorInput | ContentCreateOrConnectWithoutCreatorInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutCreatorInput | ContentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContentCreateManyCreatorInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutCreatorInput | ContentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutCreatorInput | ContentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<CampaignCreateWithoutBusinessInput, CampaignUncheckedCreateWithoutBusinessInput> | CampaignCreateWithoutBusinessInput[] | CampaignUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutBusinessInput | CampaignCreateOrConnectWithoutBusinessInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutBusinessInput | CampaignUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: CampaignCreateManyBusinessInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutBusinessInput | CampaignUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutBusinessInput | CampaignUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PaymentTransactionUpsertWithWhereUniqueWithoutUserInput | PaymentTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    set?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    disconnect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    delete?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    update?: PaymentTransactionUpdateWithWhereUniqueWithoutUserInput | PaymentTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentTransactionUpdateManyWithWhereWithoutUserInput | PaymentTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
  }

  export type PremiumPurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PremiumPurchaseCreateWithoutUserInput, PremiumPurchaseUncheckedCreateWithoutUserInput> | PremiumPurchaseCreateWithoutUserInput[] | PremiumPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PremiumPurchaseCreateOrConnectWithoutUserInput | PremiumPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PremiumPurchaseUpsertWithWhereUniqueWithoutUserInput | PremiumPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PremiumPurchaseCreateManyUserInputEnvelope
    set?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    disconnect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    delete?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    connect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    update?: PremiumPurchaseUpdateWithWhereUniqueWithoutUserInput | PremiumPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PremiumPurchaseUpdateManyWithWhereWithoutUserInput | PremiumPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PremiumPurchaseScalarWhereInput | PremiumPurchaseScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ApplicationCreateWithoutCreatorInput, ApplicationUncheckedCreateWithoutCreatorInput> | ApplicationCreateWithoutCreatorInput[] | ApplicationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCreatorInput | ApplicationCreateOrConnectWithoutCreatorInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCreatorInput | ApplicationUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ApplicationCreateManyCreatorInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCreatorInput | ApplicationUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCreatorInput | ApplicationUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatorProfileInput = {
    create?: XOR<UserCreateWithoutCreatorProfileInput, UserUncheckedCreateWithoutCreatorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedManyWithoutCreatorProfileInput = {
    create?: XOR<ContentCreateWithoutCreatorProfileInput, ContentUncheckedCreateWithoutCreatorProfileInput> | ContentCreateWithoutCreatorProfileInput[] | ContentUncheckedCreateWithoutCreatorProfileInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorProfileInput | ContentCreateOrConnectWithoutCreatorProfileInput[]
    createMany?: ContentCreateManyCreatorProfileInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutCreatorProfileInput = {
    create?: XOR<ContentCreateWithoutCreatorProfileInput, ContentUncheckedCreateWithoutCreatorProfileInput> | ContentCreateWithoutCreatorProfileInput[] | ContentUncheckedCreateWithoutCreatorProfileInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorProfileInput | ContentCreateOrConnectWithoutCreatorProfileInput[]
    createMany?: ContentCreateManyCreatorProfileInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCreatorProfileNestedInput = {
    create?: XOR<UserCreateWithoutCreatorProfileInput, UserUncheckedCreateWithoutCreatorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatorProfileInput
    upsert?: UserUpsertWithoutCreatorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatorProfileInput, UserUpdateWithoutCreatorProfileInput>, UserUncheckedUpdateWithoutCreatorProfileInput>
  }

  export type ContentUpdateManyWithoutCreatorProfileNestedInput = {
    create?: XOR<ContentCreateWithoutCreatorProfileInput, ContentUncheckedCreateWithoutCreatorProfileInput> | ContentCreateWithoutCreatorProfileInput[] | ContentUncheckedCreateWithoutCreatorProfileInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorProfileInput | ContentCreateOrConnectWithoutCreatorProfileInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutCreatorProfileInput | ContentUpsertWithWhereUniqueWithoutCreatorProfileInput[]
    createMany?: ContentCreateManyCreatorProfileInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutCreatorProfileInput | ContentUpdateWithWhereUniqueWithoutCreatorProfileInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutCreatorProfileInput | ContentUpdateManyWithWhereWithoutCreatorProfileInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutCreatorProfileNestedInput = {
    create?: XOR<ContentCreateWithoutCreatorProfileInput, ContentUncheckedCreateWithoutCreatorProfileInput> | ContentCreateWithoutCreatorProfileInput[] | ContentUncheckedCreateWithoutCreatorProfileInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorProfileInput | ContentCreateOrConnectWithoutCreatorProfileInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutCreatorProfileInput | ContentUpsertWithWhereUniqueWithoutCreatorProfileInput[]
    createMany?: ContentCreateManyCreatorProfileInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutCreatorProfileInput | ContentUpdateWithWhereUniqueWithoutCreatorProfileInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutCreatorProfileInput | ContentUpdateManyWithWhereWithoutCreatorProfileInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContentsInput = {
    create?: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentsInput
    connect?: UserWhereUniqueInput
  }

  export type CreatorProfileCreateNestedOneWithoutContentsInput = {
    create?: XOR<CreatorProfileCreateWithoutContentsInput, CreatorProfileUncheckedCreateWithoutContentsInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutContentsInput
    connect?: CreatorProfileWhereUniqueInput
  }

  export type PremiumPurchaseCreateNestedManyWithoutContentInput = {
    create?: XOR<PremiumPurchaseCreateWithoutContentInput, PremiumPurchaseUncheckedCreateWithoutContentInput> | PremiumPurchaseCreateWithoutContentInput[] | PremiumPurchaseUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PremiumPurchaseCreateOrConnectWithoutContentInput | PremiumPurchaseCreateOrConnectWithoutContentInput[]
    createMany?: PremiumPurchaseCreateManyContentInputEnvelope
    connect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
<<<<<<< HEAD
  }

  export type PremiumPurchaseUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<PremiumPurchaseCreateWithoutContentInput, PremiumPurchaseUncheckedCreateWithoutContentInput> | PremiumPurchaseCreateWithoutContentInput[] | PremiumPurchaseUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PremiumPurchaseCreateOrConnectWithoutContentInput | PremiumPurchaseCreateOrConnectWithoutContentInput[]
    createMany?: PremiumPurchaseCreateManyContentInputEnvelope
    connect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type EnumContentVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.ContentVisibility
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumModerationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ModerationStatus
  }

=======
  }

  export type PremiumPurchaseUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<PremiumPurchaseCreateWithoutContentInput, PremiumPurchaseUncheckedCreateWithoutContentInput> | PremiumPurchaseCreateWithoutContentInput[] | PremiumPurchaseUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PremiumPurchaseCreateOrConnectWithoutContentInput | PremiumPurchaseCreateOrConnectWithoutContentInput[]
    createMany?: PremiumPurchaseCreateManyContentInputEnvelope
    connect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type EnumContentVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.ContentVisibility
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

>>>>>>> origin/Aziza_branch
  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentsInput
    upsert?: UserUpsertWithoutContentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentsInput, UserUpdateWithoutContentsInput>, UserUncheckedUpdateWithoutContentsInput>
  }

  export type CreatorProfileUpdateOneWithoutContentsNestedInput = {
    create?: XOR<CreatorProfileCreateWithoutContentsInput, CreatorProfileUncheckedCreateWithoutContentsInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutContentsInput
    upsert?: CreatorProfileUpsertWithoutContentsInput
    disconnect?: CreatorProfileWhereInput | boolean
    delete?: CreatorProfileWhereInput | boolean
    connect?: CreatorProfileWhereUniqueInput
    update?: XOR<XOR<CreatorProfileUpdateToOneWithWhereWithoutContentsInput, CreatorProfileUpdateWithoutContentsInput>, CreatorProfileUncheckedUpdateWithoutContentsInput>
  }

  export type PremiumPurchaseUpdateManyWithoutContentNestedInput = {
    create?: XOR<PremiumPurchaseCreateWithoutContentInput, PremiumPurchaseUncheckedCreateWithoutContentInput> | PremiumPurchaseCreateWithoutContentInput[] | PremiumPurchaseUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PremiumPurchaseCreateOrConnectWithoutContentInput | PremiumPurchaseCreateOrConnectWithoutContentInput[]
    upsert?: PremiumPurchaseUpsertWithWhereUniqueWithoutContentInput | PremiumPurchaseUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: PremiumPurchaseCreateManyContentInputEnvelope
    set?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    disconnect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    delete?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    connect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    update?: PremiumPurchaseUpdateWithWhereUniqueWithoutContentInput | PremiumPurchaseUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: PremiumPurchaseUpdateManyWithWhereWithoutContentInput | PremiumPurchaseUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: PremiumPurchaseScalarWhereInput | PremiumPurchaseScalarWhereInput[]
  }

  export type PremiumPurchaseUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<PremiumPurchaseCreateWithoutContentInput, PremiumPurchaseUncheckedCreateWithoutContentInput> | PremiumPurchaseCreateWithoutContentInput[] | PremiumPurchaseUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PremiumPurchaseCreateOrConnectWithoutContentInput | PremiumPurchaseCreateOrConnectWithoutContentInput[]
    upsert?: PremiumPurchaseUpsertWithWhereUniqueWithoutContentInput | PremiumPurchaseUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: PremiumPurchaseCreateManyContentInputEnvelope
    set?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    disconnect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    delete?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    connect?: PremiumPurchaseWhereUniqueInput | PremiumPurchaseWhereUniqueInput[]
    update?: PremiumPurchaseUpdateWithWhereUniqueWithoutContentInput | PremiumPurchaseUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: PremiumPurchaseUpdateManyWithWhereWithoutContentInput | PremiumPurchaseUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: PremiumPurchaseScalarWhereInput | PremiumPurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ApplicationCreateWithoutCampaignInput, ApplicationUncheckedCreateWithoutCampaignInput> | ApplicationCreateWithoutCampaignInput[] | ApplicationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCampaignInput | ApplicationCreateOrConnectWithoutCampaignInput[]
    createMany?: ApplicationCreateManyCampaignInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ApplicationCreateWithoutCampaignInput, ApplicationUncheckedCreateWithoutCampaignInput> | ApplicationCreateWithoutCampaignInput[] | ApplicationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCampaignInput | ApplicationCreateOrConnectWithoutCampaignInput[]
    createMany?: ApplicationCreateManyCampaignInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type ApplicationUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ApplicationCreateWithoutCampaignInput, ApplicationUncheckedCreateWithoutCampaignInput> | ApplicationCreateWithoutCampaignInput[] | ApplicationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCampaignInput | ApplicationCreateOrConnectWithoutCampaignInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCampaignInput | ApplicationUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ApplicationCreateManyCampaignInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCampaignInput | ApplicationUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCampaignInput | ApplicationUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ApplicationCreateWithoutCampaignInput, ApplicationUncheckedCreateWithoutCampaignInput> | ApplicationCreateWithoutCampaignInput[] | ApplicationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCampaignInput | ApplicationCreateOrConnectWithoutCampaignInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCampaignInput | ApplicationUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ApplicationCreateManyCampaignInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCampaignInput | ApplicationUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCampaignInput | ApplicationUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<CampaignCreateWithoutApplicationsInput, CampaignUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutApplicationsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<CampaignCreateWithoutApplicationsInput, CampaignUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutApplicationsInput
    upsert?: CampaignUpsertWithoutApplicationsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutApplicationsInput, CampaignUpdateWithoutApplicationsInput>, CampaignUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserCreateNestedOneWithoutPaymentTransactionsInput = {
    create?: XOR<UserCreateWithoutPaymentTransactionsInput, UserUncheckedCreateWithoutPaymentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentTransactionsInput, UserUncheckedCreateWithoutPaymentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentTransactionsInput
    upsert?: UserUpsertWithoutPaymentTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentTransactionsInput, UserUpdateWithoutPaymentTransactionsInput>, UserUncheckedUpdateWithoutPaymentTransactionsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserCreateNestedOneWithoutPremiumPurchasesInput = {
    create?: XOR<UserCreateWithoutPremiumPurchasesInput, UserUncheckedCreateWithoutPremiumPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPremiumPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutPremiumPurchasesInput = {
    create?: XOR<ContentCreateWithoutPremiumPurchasesInput, ContentUncheckedCreateWithoutPremiumPurchasesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutPremiumPurchasesInput
    connect?: ContentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPremiumPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPremiumPurchasesInput, UserUncheckedCreateWithoutPremiumPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPremiumPurchasesInput
    upsert?: UserUpsertWithoutPremiumPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPremiumPurchasesInput, UserUpdateWithoutPremiumPurchasesInput>, UserUncheckedUpdateWithoutPremiumPurchasesInput>
  }

  export type ContentUpdateOneRequiredWithoutPremiumPurchasesNestedInput = {
    create?: XOR<ContentCreateWithoutPremiumPurchasesInput, ContentUncheckedCreateWithoutPremiumPurchasesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutPremiumPurchasesInput
    upsert?: ContentUpsertWithoutPremiumPurchasesInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutPremiumPurchasesInput, ContentUpdateWithoutPremiumPurchasesInput>, ContentUncheckedUpdateWithoutPremiumPurchasesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
<<<<<<< HEAD
  }

  export type NestedEnumContentVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentVisibility | EnumContentVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumContentVisibilityFilter<$PrismaModel> | $Enums.ContentVisibility
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumModerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusFilter<$PrismaModel> | $Enums.ModerationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type NestedEnumContentVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentVisibility | EnumContentVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumContentVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.ContentVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentVisibilityFilter<$PrismaModel>
    _max?: NestedEnumContentVisibilityFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
=======
  }

  export type NestedEnumContentVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentVisibility | EnumContentVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumContentVisibilityFilter<$PrismaModel> | $Enums.ContentVisibility
>>>>>>> origin/Aziza_branch
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

<<<<<<< HEAD
=======
  export type NestedEnumContentVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentVisibility | EnumContentVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentVisibility[] | ListEnumContentVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumContentVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.ContentVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentVisibilityFilter<$PrismaModel>
    _max?: NestedEnumContentVisibilityFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

>>>>>>> origin/Aziza_branch
  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CreatorProfileCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    specialization?: string | null
    socialLinks?: string | null
    payout_account?: string | null
    earnings?: number
    followers?: number
    avatar?: string | null
    location?: string | null
    payout_network?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentCreateNestedManyWithoutCreatorProfileInput
  }

  export type CreatorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    specialization?: string | null
    socialLinks?: string | null
    payout_account?: string | null
    earnings?: number
    followers?: number
    avatar?: string | null
    location?: string | null
    payout_network?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorProfileInput
  }

  export type CreatorProfileCreateOrConnectWithoutUserInput = {
    where: CreatorProfileWhereUniqueInput
    create: XOR<CreatorProfileCreateWithoutUserInput, CreatorProfileUncheckedCreateWithoutUserInput>
  }

  export type ContentCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileCreateNestedOneWithoutContentsInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfileId?: string | null
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutCreatorInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput>
  }

  export type ContentCreateManyCreatorInputEnvelope = {
    data: ContentCreateManyCreatorInput | ContentCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutBusinessInput = {
    id?: string
    title: string
    description?: string | null
    budget: number
    status?: $Enums.CampaignStatus
    niche_filter: string
    min_audience_size: number
    max_creators: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutBusinessInput = {
    id?: string
    title: string
    description?: string | null
    budget: number
    status?: $Enums.CampaignStatus
    niche_filter: string
    min_audience_size: number
    max_creators: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutBusinessInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutBusinessInput, CampaignUncheckedCreateWithoutBusinessInput>
  }

  export type CampaignCreateManyBusinessInputEnvelope = {
    data: CampaignCreateManyBusinessInput | CampaignCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    conversationId: string
    message: string
    isRead?: boolean
    readAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    conversationId: string
    message: string
    isRead?: boolean
    readAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    conversationId: string
    message: string
    isRead?: boolean
    readAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    conversationId: string
    message: string
    isRead?: boolean
    readAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type PaymentTransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    paymentType: $Enums.PaymentType
    paymentStatus?: $Enums.PaymentStatus
    transactionRef: string
    providerRef?: string | null
    idempotencyKey?: string | null
    campaignId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    paymentType: $Enums.PaymentType
    paymentStatus?: $Enums.PaymentStatus
    transactionRef: string
    providerRef?: string | null
    idempotencyKey?: string | null
    campaignId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransactionCreateOrConnectWithoutUserInput = {
    where: PaymentTransactionWhereUniqueInput
    create: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput>
  }

  export type PaymentTransactionCreateManyUserInputEnvelope = {
    data: PaymentTransactionCreateManyUserInput | PaymentTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PremiumPurchaseCreateWithoutUserInput = {
    id?: string
    status: string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutPremiumPurchasesInput
  }

  export type PremiumPurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    contentId: string
    status: string
    createdAt?: Date | string
  }

  export type PremiumPurchaseCreateOrConnectWithoutUserInput = {
    where: PremiumPurchaseWhereUniqueInput
    create: XOR<PremiumPurchaseCreateWithoutUserInput, PremiumPurchaseUncheckedCreateWithoutUserInput>
  }

  export type PremiumPurchaseCreateManyUserInputEnvelope = {
    data: PremiumPurchaseCreateManyUserInput | PremiumPurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutCreatorInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutCreatorInput = {
    id?: string
    campaignId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutCreatorInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutCreatorInput, ApplicationUncheckedCreateWithoutCreatorInput>
  }

  export type ApplicationCreateManyCreatorInputEnvelope = {
    data: ApplicationCreateManyCreatorInput | ApplicationCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CreatorProfileUpsertWithoutUserInput = {
    update: XOR<CreatorProfileUpdateWithoutUserInput, CreatorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CreatorProfileCreateWithoutUserInput, CreatorProfileUncheckedCreateWithoutUserInput>
    where?: CreatorProfileWhereInput
  }

  export type CreatorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CreatorProfileWhereInput
    data: XOR<CreatorProfileUpdateWithoutUserInput, CreatorProfileUncheckedUpdateWithoutUserInput>
  }

  export type CreatorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    payout_account?: NullableStringFieldUpdateOperationsInput | string | null
    earnings?: FloatFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    payout_network?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutCreatorProfileNestedInput
  }

  export type CreatorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    payout_account?: NullableStringFieldUpdateOperationsInput | string | null
    earnings?: FloatFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    payout_network?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutCreatorProfileNestedInput
  }

  export type ContentUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutCreatorInput, ContentUncheckedUpdateWithoutCreatorInput>
    create: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutCreatorInput, ContentUncheckedUpdateWithoutCreatorInput>
  }

  export type ContentUpdateManyWithWhereWithoutCreatorInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    contentUrl?: StringFilter<"Content"> | string
    thumbnailUrl?: StringNullableFilter<"Content"> | string | null
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    visibility?: EnumContentVisibilityFilter<"Content"> | $Enums.ContentVisibility
    price?: FloatNullableFilter<"Content"> | number | null
    currency?: StringNullableFilter<"Content"> | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFilter<"Content"> | $Enums.ModerationStatus
    rejectionReason?: StringNullableFilter<"Content"> | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    creatorId?: StringFilter<"Content"> | string
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    creatorProfileId?: StringNullableFilter<"Content"> | string | null
  }

  export type CampaignUpsertWithWhereUniqueWithoutBusinessInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutBusinessInput, CampaignUncheckedUpdateWithoutBusinessInput>
    create: XOR<CampaignCreateWithoutBusinessInput, CampaignUncheckedCreateWithoutBusinessInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutBusinessInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutBusinessInput, CampaignUncheckedUpdateWithoutBusinessInput>
  }

  export type CampaignUpdateManyWithWhereWithoutBusinessInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutBusinessInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    businessId?: StringFilter<"Campaign"> | string
    title?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    budget?: IntFilter<"Campaign"> | number
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    niche_filter?: StringFilter<"Campaign"> | string
    min_audience_size?: IntFilter<"Campaign"> | number
    max_creators?: IntFilter<"Campaign"> | number
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type PaymentTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentTransactionWhereUniqueInput
    update: XOR<PaymentTransactionUpdateWithoutUserInput, PaymentTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput>
  }

  export type PaymentTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentTransactionWhereUniqueInput
    data: XOR<PaymentTransactionUpdateWithoutUserInput, PaymentTransactionUncheckedUpdateWithoutUserInput>
  }

  export type PaymentTransactionUpdateManyWithWhereWithoutUserInput = {
    where: PaymentTransactionScalarWhereInput
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentTransactionScalarWhereInput = {
    AND?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
    OR?: PaymentTransactionScalarWhereInput[]
    NOT?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
    id?: StringFilter<"PaymentTransaction"> | string
    userId?: StringFilter<"PaymentTransaction"> | string
    amount?: FloatFilter<"PaymentTransaction"> | number
    paymentType?: EnumPaymentTypeFilter<"PaymentTransaction"> | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusFilter<"PaymentTransaction"> | $Enums.PaymentStatus
    transactionRef?: StringFilter<"PaymentTransaction"> | string
    providerRef?: StringNullableFilter<"PaymentTransaction"> | string | null
    idempotencyKey?: StringNullableFilter<"PaymentTransaction"> | string | null
    campaignId?: StringNullableFilter<"PaymentTransaction"> | string | null
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
  }

  export type PremiumPurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PremiumPurchaseWhereUniqueInput
    update: XOR<PremiumPurchaseUpdateWithoutUserInput, PremiumPurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PremiumPurchaseCreateWithoutUserInput, PremiumPurchaseUncheckedCreateWithoutUserInput>
  }

  export type PremiumPurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PremiumPurchaseWhereUniqueInput
    data: XOR<PremiumPurchaseUpdateWithoutUserInput, PremiumPurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PremiumPurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PremiumPurchaseScalarWhereInput
    data: XOR<PremiumPurchaseUpdateManyMutationInput, PremiumPurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PremiumPurchaseScalarWhereInput = {
    AND?: PremiumPurchaseScalarWhereInput | PremiumPurchaseScalarWhereInput[]
    OR?: PremiumPurchaseScalarWhereInput[]
    NOT?: PremiumPurchaseScalarWhereInput | PremiumPurchaseScalarWhereInput[]
    id?: StringFilter<"PremiumPurchase"> | string
    userId?: StringFilter<"PremiumPurchase"> | string
    contentId?: StringFilter<"PremiumPurchase"> | string
    status?: StringFilter<"PremiumPurchase"> | string
    createdAt?: DateTimeFilter<"PremiumPurchase"> | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutCreatorInput, ApplicationUncheckedUpdateWithoutCreatorInput>
    create: XOR<ApplicationCreateWithoutCreatorInput, ApplicationUncheckedCreateWithoutCreatorInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutCreatorInput, ApplicationUncheckedUpdateWithoutCreatorInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutCreatorInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    campaignId?: StringFilter<"Application"> | string
    creatorId?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type UserCreateWithoutCreatorProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatorProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatorProfileInput, UserUncheckedCreateWithoutCreatorProfileInput>
  }

  export type ContentCreateWithoutCreatorProfileInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContentsInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutCreatorProfileInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutCreatorProfileInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutCreatorProfileInput, ContentUncheckedCreateWithoutCreatorProfileInput>
  }

  export type ContentCreateManyCreatorProfileInputEnvelope = {
    data: ContentCreateManyCreatorProfileInput | ContentCreateManyCreatorProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatorProfileInput = {
    update: XOR<UserUpdateWithoutCreatorProfileInput, UserUncheckedUpdateWithoutCreatorProfileInput>
    create: XOR<UserCreateWithoutCreatorProfileInput, UserUncheckedCreateWithoutCreatorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatorProfileInput, UserUncheckedUpdateWithoutCreatorProfileInput>
  }

  export type UserUpdateWithoutCreatorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ContentUpsertWithWhereUniqueWithoutCreatorProfileInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutCreatorProfileInput, ContentUncheckedUpdateWithoutCreatorProfileInput>
    create: XOR<ContentCreateWithoutCreatorProfileInput, ContentUncheckedCreateWithoutCreatorProfileInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutCreatorProfileInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutCreatorProfileInput, ContentUncheckedUpdateWithoutCreatorProfileInput>
  }

  export type ContentUpdateManyWithWhereWithoutCreatorProfileInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutCreatorProfileInput>
  }

  export type UserCreateWithoutContentsInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileCreateNestedOneWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutContentsInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutContentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
  }

  export type CreatorProfileCreateWithoutContentsInput = {
    id?: string
    bio?: string | null
    specialization?: string | null
    socialLinks?: string | null
    payout_account?: string | null
    earnings?: number
    followers?: number
    avatar?: string | null
    location?: string | null
    payout_network?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreatorProfileInput
  }

  export type CreatorProfileUncheckedCreateWithoutContentsInput = {
    id?: string
    userId: string
    bio?: string | null
    specialization?: string | null
    socialLinks?: string | null
    payout_account?: string | null
    earnings?: number
    followers?: number
    avatar?: string | null
    location?: string | null
    payout_network?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreatorProfileCreateOrConnectWithoutContentsInput = {
    where: CreatorProfileWhereUniqueInput
    create: XOR<CreatorProfileCreateWithoutContentsInput, CreatorProfileUncheckedCreateWithoutContentsInput>
  }

  export type PremiumPurchaseCreateWithoutContentInput = {
    id?: string
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPremiumPurchasesInput
  }

  export type PremiumPurchaseUncheckedCreateWithoutContentInput = {
    id?: string
    userId: string
    status: string
    createdAt?: Date | string
  }

  export type PremiumPurchaseCreateOrConnectWithoutContentInput = {
    where: PremiumPurchaseWhereUniqueInput
    create: XOR<PremiumPurchaseCreateWithoutContentInput, PremiumPurchaseUncheckedCreateWithoutContentInput>
  }

  export type PremiumPurchaseCreateManyContentInputEnvelope = {
    data: PremiumPurchaseCreateManyContentInput | PremiumPurchaseCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContentsInput = {
    update: XOR<UserUpdateWithoutContentsInput, UserUncheckedUpdateWithoutContentsInput>
    create: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentsInput, UserUncheckedUpdateWithoutContentsInput>
  }

  export type UserUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUpdateOneWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorProfileUpsertWithoutContentsInput = {
    update: XOR<CreatorProfileUpdateWithoutContentsInput, CreatorProfileUncheckedUpdateWithoutContentsInput>
    create: XOR<CreatorProfileCreateWithoutContentsInput, CreatorProfileUncheckedCreateWithoutContentsInput>
    where?: CreatorProfileWhereInput
  }

  export type CreatorProfileUpdateToOneWithWhereWithoutContentsInput = {
    where?: CreatorProfileWhereInput
    data: XOR<CreatorProfileUpdateWithoutContentsInput, CreatorProfileUncheckedUpdateWithoutContentsInput>
  }

  export type CreatorProfileUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    payout_account?: NullableStringFieldUpdateOperationsInput | string | null
    earnings?: FloatFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    payout_network?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreatorProfileNestedInput
  }

  export type CreatorProfileUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    payout_account?: NullableStringFieldUpdateOperationsInput | string | null
    earnings?: FloatFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    payout_network?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumPurchaseUpsertWithWhereUniqueWithoutContentInput = {
    where: PremiumPurchaseWhereUniqueInput
    update: XOR<PremiumPurchaseUpdateWithoutContentInput, PremiumPurchaseUncheckedUpdateWithoutContentInput>
    create: XOR<PremiumPurchaseCreateWithoutContentInput, PremiumPurchaseUncheckedCreateWithoutContentInput>
  }

  export type PremiumPurchaseUpdateWithWhereUniqueWithoutContentInput = {
    where: PremiumPurchaseWhereUniqueInput
    data: XOR<PremiumPurchaseUpdateWithoutContentInput, PremiumPurchaseUncheckedUpdateWithoutContentInput>
  }

  export type PremiumPurchaseUpdateManyWithWhereWithoutContentInput = {
    where: PremiumPurchaseScalarWhereInput
    data: XOR<PremiumPurchaseUpdateManyMutationInput, PremiumPurchaseUncheckedUpdateManyWithoutContentInput>
  }

  export type UserCreateWithoutCampaignsInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileCreateNestedOneWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type ApplicationCreateWithoutCampaignInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutCampaignInput = {
    id?: string
    creatorId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutCampaignInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutCampaignInput, ApplicationUncheckedCreateWithoutCampaignInput>
  }

  export type ApplicationCreateManyCampaignInputEnvelope = {
    data: ApplicationCreateManyCampaignInput | ApplicationCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUpdateOneWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ApplicationUpsertWithWhereUniqueWithoutCampaignInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutCampaignInput, ApplicationUncheckedUpdateWithoutCampaignInput>
    create: XOR<ApplicationCreateWithoutCampaignInput, ApplicationUncheckedCreateWithoutCampaignInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutCampaignInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutCampaignInput, ApplicationUncheckedUpdateWithoutCampaignInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutCampaignInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignCreateWithoutApplicationsInput = {
    id?: string
    title: string
    description?: string | null
    budget: number
    status?: $Enums.CampaignStatus
    niche_filter: string
    min_audience_size: number
    max_creators: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    business: UserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutApplicationsInput = {
    id?: string
    businessId: string
    title: string
    description?: string | null
    budget: number
    status?: $Enums.CampaignStatus
    niche_filter: string
    min_audience_size: number
    max_creators: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutApplicationsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutApplicationsInput, CampaignUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileCreateNestedOneWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type CampaignUpsertWithoutApplicationsInput = {
    update: XOR<CampaignUpdateWithoutApplicationsInput, CampaignUncheckedUpdateWithoutApplicationsInput>
    create: XOR<CampaignCreateWithoutApplicationsInput, CampaignUncheckedCreateWithoutApplicationsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutApplicationsInput, CampaignUncheckedUpdateWithoutApplicationsInput>
  }

  export type CampaignUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    niche_filter?: StringFieldUpdateOperationsInput | string
    min_audience_size?: IntFieldUpdateOperationsInput | number
    max_creators?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: UserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    niche_filter?: StringFieldUpdateOperationsInput | string
    min_audience_size?: IntFieldUpdateOperationsInput | number
    max_creators?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUpdateOneWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileCreateNestedOneWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutPaymentTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutPaymentTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentTransactionsInput, UserUncheckedCreateWithoutPaymentTransactionsInput>
  }

  export type UserUpsertWithoutPaymentTransactionsInput = {
    update: XOR<UserUpdateWithoutPaymentTransactionsInput, UserUncheckedUpdateWithoutPaymentTransactionsInput>
    create: XOR<UserCreateWithoutPaymentTransactionsInput, UserUncheckedCreateWithoutPaymentTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentTransactionsInput, UserUncheckedUpdateWithoutPaymentTransactionsInput>
  }

  export type UserUpdateWithoutPaymentTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUpdateOneWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileCreateNestedOneWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignCreateNestedManyWithoutBusinessInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutBusinessInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileCreateNestedOneWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    paymentTransactions?: PaymentTransactionCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    paymentTransactions?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    premiumPurchases?: PremiumPurchaseUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUpdateOneWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUpdateManyWithoutBusinessNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutBusinessNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUpdateOneWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    paymentTransactions?: PaymentTransactionUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    paymentTransactions?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutPremiumPurchasesInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileCreateNestedOneWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutPremiumPurchasesInput = {
    id?: string
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutBusinessInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    paymentTransactions?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutPremiumPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPremiumPurchasesInput, UserUncheckedCreateWithoutPremiumPurchasesInput>
  }

  export type ContentCreateWithoutPremiumPurchasesInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContentsInput
    creatorProfile?: CreatorProfileCreateNestedOneWithoutContentsInput
  }

  export type ContentUncheckedCreateWithoutPremiumPurchasesInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfileId?: string | null
  }

  export type ContentCreateOrConnectWithoutPremiumPurchasesInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutPremiumPurchasesInput, ContentUncheckedCreateWithoutPremiumPurchasesInput>
  }

  export type UserUpsertWithoutPremiumPurchasesInput = {
    update: XOR<UserUpdateWithoutPremiumPurchasesInput, UserUncheckedUpdateWithoutPremiumPurchasesInput>
    create: XOR<UserCreateWithoutPremiumPurchasesInput, UserUncheckedCreateWithoutPremiumPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPremiumPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPremiumPurchasesInput, UserUncheckedUpdateWithoutPremiumPurchasesInput>
  }

  export type UserUpdateWithoutPremiumPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUpdateOneWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutPremiumPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutBusinessNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    paymentTransactions?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ContentUpsertWithoutPremiumPurchasesInput = {
    update: XOR<ContentUpdateWithoutPremiumPurchasesInput, ContentUncheckedUpdateWithoutPremiumPurchasesInput>
    create: XOR<ContentCreateWithoutPremiumPurchasesInput, ContentUncheckedCreateWithoutPremiumPurchasesInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutPremiumPurchasesInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutPremiumPurchasesInput, ContentUncheckedUpdateWithoutPremiumPurchasesInput>
  }

  export type ContentUpdateWithoutPremiumPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContentsNestedInput
    creatorProfile?: CreatorProfileUpdateOneWithoutContentsNestedInput
  }

  export type ContentUncheckedUpdateWithoutPremiumPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorProfileId?: string | null
  }

  export type CampaignCreateManyBusinessInput = {
    id?: string
    title: string
    description?: string | null
    budget: number
    status?: $Enums.CampaignStatus
    niche_filter: string
    min_audience_size: number
    max_creators: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    receiverId: string
    conversationId: string
    message: string
    isRead?: boolean
    readAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    senderId: string
    conversationId: string
    message: string
    isRead?: boolean
    readAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentTransactionCreateManyUserInput = {
    id?: string
    amount: number
    paymentType: $Enums.PaymentType
    paymentStatus?: $Enums.PaymentStatus
    transactionRef: string
    providerRef?: string | null
    idempotencyKey?: string | null
    campaignId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PremiumPurchaseCreateManyUserInput = {
    id?: string
    contentId: string
    status: string
    createdAt?: Date | string
  }

  export type ApplicationCreateManyCreatorInput = {
    id?: string
    campaignId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfile?: CreatorProfileUpdateOneWithoutContentsNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    niche_filter?: StringFieldUpdateOperationsInput | string
    min_audience_size?: IntFieldUpdateOperationsInput | number
    max_creators?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    niche_filter?: StringFieldUpdateOperationsInput | string
    min_audience_size?: IntFieldUpdateOperationsInput | number
    max_creators?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: IntFieldUpdateOperationsInput | number
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    niche_filter?: StringFieldUpdateOperationsInput | string
    min_audience_size?: IntFieldUpdateOperationsInput | number
    max_creators?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumPurchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutPremiumPurchasesNestedInput
  }

  export type PremiumPurchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumPurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyCreatorProfileInput = {
    id?: string
    title: string
    description?: string | null
    contentUrl: string
    thumbnailUrl?: string | null
    type: $Enums.ContentType
    visibility: $Enums.ContentVisibility
    price?: number | null
    currency?: string | null
<<<<<<< HEAD
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: Date | string | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateWithoutCreatorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContentsNestedInput
    premiumPurchases?: PremiumPurchaseUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutCreatorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumPurchases?: PremiumPurchaseUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutCreatorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    visibility?: EnumContentVisibilityFieldUpdateOperationsInput | $Enums.ContentVisibility
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
=======
>>>>>>> origin/Aziza_branch
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumPurchaseCreateManyContentInput = {
    id?: string
    userId: string
    status: string
    createdAt?: Date | string
  }

  export type PremiumPurchaseUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPremiumPurchasesNestedInput
  }

  export type PremiumPurchaseUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumPurchaseUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyCampaignInput = {
    id?: string
    creatorId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}